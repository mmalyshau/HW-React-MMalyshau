const tsconfigPath = "./tsconfig.json";
import { readFileSync } from "fs";
import { resolve } from "path";

const tsConfig = JSON.parse(
  readFileSync(resolve(__dirname, tsconfigPath), "utf-8")
);
const pathsToModuleNameMapper = (config: {
  compilerOptions: { paths: Record<string, string[]> };
}) =>
  Object.fromEntries(
    Object.entries(config.compilerOptions.paths).map(([k, v]) => [
      `^${k.replace("*", "(.*)")}$`,
      `<rootDir>${v[0].replace("*", "$1")}`,
    ])
  );

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.svg$": "jest-transformer-svg",

    ...pathsToModuleNameMapper(tsConfig),
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text", "lcov", "json-summary", "html"],
};

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import {defineConfig} from "vite";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@lib": path.resolve(__dirname, "src/shared/lib"),
      "@processes": path.resolve(__dirname, "src/processes"),
      "@ui": path.resolve(__dirname, "src/shared/ui"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@config": path.resolve(__dirname, "src/shared/config"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@router": path.resolve(__dirname, "src/router"),
        "@context": path.resolve(__dirname, "src/app/context"),
    },
  },
});

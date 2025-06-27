import styled from "styled-components";
import React from "react";

type TButtonSize = "small" | "medium" | "large";
type TButtonVariant = "primary" | "secondary";

type TButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: TButtonVariant;
  size?: TButtonSize;
  className?: string;
  [key: string]: any;
};

const StyledButton = styled.button<{ $variant: TButtonVariant; $size: TButtonSize }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  font-size: 1rem;
  line-height: 1.6875rem;
  letter-spacing: 0.0225rem;
  transition: all 0.3s ease;
  user-select: none;
  border: none;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === "primary" &&
    `
    background-color: var(--color-button-primary-bg);
    color: var(--color-button-primary-text);

    &:hover {
      background-color: var(--color-button-primary-hover-bg);
    }

    &:focus-visible {
      outline: 0.0625rem solid var(--color-button-primary-focus-bg);
    }

    &:active {
      transform: scale(0.98);
    }
  `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    `
    outline: 0.0625rem solid var(--color-button-secondary-border-color);
    color: var(--color-button-secondary-text);
    background-color: var(--color-button-secondary-bg);

    &:hover {
      background-color: var(--color-accent-primary-hover);
      color: var(--color-button-primary-text);
    }

    &:active {
      background-color: var(--color-accent-primary);
      color: var(--color-button-primary-text);
      transform: scale(0.98);
    }

    &:focus-visible {
      outline: 0.0625rem solid var(--color-button-secondary-border-color);
    }
  `}

  ${({ $size }) =>
    $size === "small" &&
    `
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  `}

  ${({ $size }) =>
    $size === "medium" &&
    `
    padding: 0.625rem 1.6875rem;
  `}

  ${({ $size }) =>
    $size === "large" &&
    `
    padding: 1.125rem 2rem;
    font-size: 1.125rem;
  `}
`;

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
  ...rest
}: TButtonProps) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      className={className}
      onClick={(e) => {
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

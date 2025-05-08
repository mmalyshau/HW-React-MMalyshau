import styled from "styled-components";

const StyledButton = styled.button`
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

  &[data-variant="primary"] {
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
  }

  &[data-variant="secondary"] {
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
  }

  &[data-size="small"] {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }

  &[data-size="medium"] {
    padding: 0.625rem 1.6875rem;
  }

  &[data-size="large"] {
    padding: 1.125rem 2rem;
    font-size: 1.125rem;
  }
`;

export const Button = ({children, onClick, type = "button", variant = "primary", size = "medium", className = "", ...rest
}) => {
  return (
      <StyledButton
          type={type}
          onClick={onClick}
          data-variant={variant}
          data-size={size}
          className={className}
          {...rest}
      >
        {children}
      </StyledButton>
  );
};

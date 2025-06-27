import React from "react";
import styles from "./input.module.scss";

interface IInputProps {
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    [x: string]: any;
}

export const Input = ({
  type = 'text',
  size = 'medium',
  className = '',
  ...props
}:IInputProps) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${styles[size]} ${className}`}
      {...props}
    />
  );
};


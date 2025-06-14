import React from "react";
import styles from "./input.module.scss";

interface IInputProps {
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    [x: string]: any;
}

const Input: React.FC<IInputProps> = ({
  type = 'text',
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${styles[size]} ${className}`}
      {...props}
    />
  );
};

export default Input;


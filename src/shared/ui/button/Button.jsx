import { Component } from "react";
import style from "./button.module.scss";

export class Button extends Component {
  render() {
    const {
      children,
      onClick,
      type = "button",
      variant = "primary",
      size = "medium",
      className = "",
      ...rest
    } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${style.btn} ${style[variant]} ${style[size]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

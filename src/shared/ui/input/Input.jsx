import { Component } from "react";
import style from "./input.module.scss";

export class Input extends Component {
  render() {
    const {
      type = "text",
      size = "medium",
      className = "",
      ...rest
    } = this.props;

    return (
      <input
        type={type}
        className={`${style.input} ${style[size]} ${className}`}
        {...rest}
      />
    );
  }
}

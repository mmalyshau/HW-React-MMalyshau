import { Component } from "react";
import styles from "./tooltip.module.scss";

export class Tooltip extends Component {
  render() {
    const { children, text } = this.props;

    return (
      <div className={styles.tooltip}>
        {children}
        <div className={styles.tooltipText}>{text}</div>
      </div>
    );
  }
}

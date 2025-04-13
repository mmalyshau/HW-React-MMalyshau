import styles from "./tooltip.module.scss";

export const Tooltip = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltipText}>{text}</div>
    </div>
  );
};

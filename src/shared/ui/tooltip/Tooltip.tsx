import { ReactNode } from "react";
import styles from "./tooltip.module.scss";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

 const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltipText}>{text}</div>
    </div>
  );
};

export default Tooltip;
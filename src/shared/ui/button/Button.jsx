import style from "./button.module.scss";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style.btn} ${style[variant]} ${style[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

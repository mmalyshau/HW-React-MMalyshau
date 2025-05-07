import style from "./button.module.scss";

export const Button = (props) => {
  const {
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "medium",
    className = "",
    ...rest
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      data-variant={variant}
      data-size={size}
      className={`${style.btn} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

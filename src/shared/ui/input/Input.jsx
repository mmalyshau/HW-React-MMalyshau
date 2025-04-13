import style from "./input.module.scss";

export const Input = ({ type = "text", size = "medium", className = "", ...rest }) => {
  return (
    <input
      type={type}
      className={`${style.input} ${style[size]} ${className}`}
      {...rest}
    />
  );
};

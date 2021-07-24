import { FC, InputHTMLAttributes, createElement } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  //cursor-${props.disabled ? "default" : "text"}
  return (
    <input
      className={`
            flex-grow
            border-none shadow-none overflow-ellipsis outline-none
            bg-transparent disabled:bg-transparent
            text-title
            ${className ? className : ""}
        `}
      {...props}
    />
  );
};

/* styled("input")<IStyledInputProps>(
(props) => ({
  cursor: props.disabled ? "default" : "text",
}),
{
  background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
  border: "none",
  boxShadow: "none",
  textOverflow: "ellipsis",
  outline: "currentcolor none 0px",
},
space,
typography
); */

export default Input;

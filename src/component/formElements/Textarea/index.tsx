import { FC, DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import Label from "../Label";
import HelperText from "../HelperText";

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: any;
  //fRef: any;
  errors?: string[];
  helperText?: string[];
}

const Textarea: FC<TextareaProps> = ({
  //id,
  label,
  //placeholder,
  //name,
  //fRef,
  errors,
  helperText,
  //disabled,
  ...props
}) => {
  const isError = errors && errors.length > 0;

  return (
    <div className="w-full relative">
      <Label
        htmlFor={props.id}
        className={`
            text-sm
            text-${props.disabled ? "disabled" : isError ? "error" : "body"}
            px-2
            absolute -top-3 left-2
            bg-paper
        `}
      >
        {label}
      </Label>
      <textarea
        style={{ textIndent: "15px" }}
        className={`
            w-full
            rounded-sm
            pt-3 pb-2 px-2 m-0
            border border-${
              props.disabled ? "disabled" : isError ? "error" : "body"
            } border-solid focus:border-primary ${
          props.disabled ? "" : "hover:border-primary"
        }
            outline-none
            flex-grow
            overflow-auto
            resize-y
            bg-paper
            text-body
      `}
        {...props}
      />

      <HelperText
        /* className={`
            text-xs tracking-normal
            text-${disabled ? "disabled" : isError ? "error" : "success"}
            pl-1
        `} */
        type={props.disabled ? "disabled" : isError ? "error" : "success"}
        messages={isError ? errors : helperText}
      />
    </div>
  );
};

export default Textarea;

import { FC } from "react";
import HelperText from "../HelperText";
import Label from "../Label";

/* export const BorderBottom = ({
  error,
  disabled,
}: {
  error: boolean;
  disabled: boolean;
}) => {
  return (
    <div
      className={`
            w-full
            h-0.5
            border-b
            border-${disabled ? "disabled" : error ? "error" : "text"}
        `}
    ></div>
  );
};
 */
export interface IWrapperProps {
  id?: string;
  disabled?: boolean;
  label: any;
  //fRef: any;
  errors?: string[];
  helperText?: string[];
  children?: any;
}

const FieldWrapper: FC<IWrapperProps> = ({
  id,
  label,
  errors,
  helperText,
  disabled,
  children,
}) => {
  //border-${disabled ? "disabled" : error ? "error" : "text"}
  //hover:border-${disabled ? "disabled" : error ? "error" : "title"}
  /* focus:border-${
                disabled ? "disabled" : error ? "error" : "primary"
              } */
  const isError = errors && errors.length > 0;

  return (
    <div>
      <div
        className={`
              relative
              w-full
              flex flex-wrap
              hover:border-${
                disabled ? "disabled" : isError ? "error" : "primary"
              }
              focus-within:border-${
                disabled ? "disabled" : isError ? "error" : "primary"
              }
              focus-within:border-b-2
              border-b
              border-${disabled ? "disabled" : isError ? "error" : "body"}
          `}
      >
        <Label
          htmlFor={id}
          className={`
            text-sm
            text-${disabled ? "disabled" : isError ? "error" : "body"}
            pl-4 py-1 mr-2
        `}
        >
          {label}
        </Label>
        {children}
      </div>

      <HelperText
        /* className={`
            text-xs tracking-normal
            text-${disabled ? "disabled" : isError ? "error" : "success"}
            pl-1
        `} */
        type={disabled ? "disabled" : isError ? "error" : "success"}
        messages={isError ? errors : helperText}
      />
    </div>
  );
};

export default FieldWrapper;

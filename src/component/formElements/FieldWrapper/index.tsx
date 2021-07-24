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
  error?: boolean;
  helperText?: string;
  children?: any;
}

const FieldWrapper: FC<IWrapperProps> = ({
  id,
  label,
  error,
  helperText,
  disabled,
  children,
}) => {
  //border-${disabled ? "disabled" : error ? "error" : "text"}
  //hover:border-${disabled ? "disabled" : error ? "error" : "title"}
  /* focus:border-${
                disabled ? "disabled" : error ? "error" : "primary"
              } */
  return (
    <div>
      <div
        className={`
              relative
              w-full
              flex flex-wrap
              hover:border-${
                disabled ? "disabled" : error ? "error" : "primary"
              }
              focus-within:border-${
                disabled ? "disabled" : error ? "error" : "primary"
              }
              focus-within:border-b-2
              border-b
              border-${disabled ? "disabled" : error ? "error" : "body"}
          `}
      >
        <Label
          htmlFor={id}
          className={`
            text-base
            text-${disabled ? "disabled" : error ? "error" : "title"}
            pl-4 py-1 mr-2
        `}
        >
          {label}
        </Label>
        {children}
      </div>

      <HelperText
        className={`
            text-xs tracking-normal
            text-${disabled ? "disabled" : error ? "error" : "success"}
            pl-1
        `}
      >
        {helperText}
      </HelperText>
    </div>
  );
};

export default FieldWrapper;

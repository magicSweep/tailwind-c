import { FC, HTMLProps, InputHTMLAttributes } from "react";
import Input, { InputProps } from "../Input";
import FieldWrapper from "../FieldWrapper";

export interface FieldProps extends InputProps {
  label: any;
  //fRef: any;
  errors?: string[];
  helperText?: string[];
}

const BaseField: FC<FieldProps> = ({
  type,
  id,
  label,
  placeholder,
  name,
  //fRef,
  errors,
  helperText,
  disabled,
  ...props
}) => {
  return (
    <FieldWrapper
      id={id}
      label={label}
      errors={errors}
      helperText={helperText}
      disabled={disabled}
    >
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        className={`px-2`}
        {...props}
      />
    </FieldWrapper>
  );
};

export default BaseField;

import { FC, HTMLProps, InputHTMLAttributes } from "react";
import Input from "../Input";
import FieldWrapper from "../FieldWrapper";

export interface FieldProps extends HTMLProps<InputHTMLAttributes<any>> {
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
      />
    </FieldWrapper>
  );
};

export default BaseField;

import {
  FC,
  HTMLProps,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
import ArrowIcon from "../../icons/ArrowIcon";
import FieldWrapper from "../FieldWrapper";

export interface IOption {
  value: string;
  label: string;
}

export interface SelectProps extends HTMLProps<SelectHTMLAttributes<any>> {
  options: IOption[];
  errors?: string[];
  helperText?: string[];
  label: any;
}

const getOptions = (options: IOption[]) => {
  return options.map((option, index) => {
    //let selected = (value !== '') ? option.value === value : option.selected;

    return (
      <option value={option.value} key={option.value + index}>
        {option.label}
      </option>
    );
  });
};

export const Select: FC<SelectProps> = ({
  options,
  errors,
  helperText,
  label,
  ...props
}) => {
  const optionsElements = getOptions(options);

  return (
    <FieldWrapper
      id={props.id}
      label={label}
      errors={errors}
      helperText={helperText}
      disabled={props.disabled}
    >
      <div
        className={`
            absolute top-0 right-0
            bg-transparent
            h-full w-5/6
            flex justify-end items-center
            pr-3
          `}
      >
        <ArrowIcon
          width={8}
          height={8}
          direction="down"
          className={`
            fill-title
          `}
        />
      </div>
      {/*@ts-ignore*/}
      <select
        //value={value}
        //onChange={onChange}
        className={`
            appearance-none 
            cursor-${props.disabled ? "default" : "pointer"} 
            text-${props.disabled ? "disabled" : "title"} 
            flex-grow outline-none 
            relative 
            bg-transparent`}
        {...props}
      >
        {optionsElements}
      </select>
    </FieldWrapper>
  );
};

export default Select;

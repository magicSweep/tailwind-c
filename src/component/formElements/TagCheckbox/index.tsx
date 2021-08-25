import { FC, InputHTMLAttributes } from "react";
import BoomEffect from "../../effects/Boom";
import Tag, { TagProps } from "../../Tag";

export interface TagCheckboxProps
  extends TagProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "children"> {
  /* id: string;
  checked: boolean;
  name: string;
  disabled: boolean;
  onChange?: (event: any) => void; */
}

const TagCheckbox: FC<TagCheckboxProps> = ({ color, children, ...props }) => {
  return (
    <label
      className={`
            cursor-${props.disabled ? "default" : "pointer"}
            relative inline-block 
            rounded-sm 
            overflow-hidden
        `}
    >
      <Tag color={props.disabled || !props.checked ? "disabled" : color}>
        {children}
      </Tag>

      <input
        className="hidden"
        //id={id}
        type="checkbox"
        //onChange={onChange}
        //name={name}
        //checked={checked}
        //disabled={props.disabled}
        {...props}
      />

      {!props.disabled && <BoomEffect />}
    </label>
  );
};

export default TagCheckbox;

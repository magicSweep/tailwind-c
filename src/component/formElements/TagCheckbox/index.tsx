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
    <div
      className={`
            cursor-${props.disabled ? "default" : "pointer"}
            relative inline-block 
            rounded-sm 
            overflow-hidden
        `}
    >
      {!props.disabled && <BoomEffect />}
      <Tag
        color={props.disabled || !props.checked ? "disabled" : color}
        htmlFor={props.id}
        as="label"
      >
        {children}
      </Tag>

      <input
        className="hidden"
        //id={id}
        type={"checkbox"}
        //onChange={onChange}
        //name={name}
        //checked={checked}
        //disabled={props.disabled}
        {...props}
      />
    </div>
  );
};

export default TagCheckbox;

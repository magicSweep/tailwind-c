import { forwardRef } from "react";
import { createElement, HTMLProps } from "react";
import BoomEffect from "../../effects/Boom";

export interface BaseButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "color"> {}

//type BaseButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

const BaseBtn = (props: BaseButtonProps) =>
  createElement(props.as ? props.as : "button", props);

export default ({ children, className, ...props }: BaseButtonProps) => {
  return (
    <BaseBtn
      className={`
            ${props.disabled ? "cursor-default" : "cursor-pointer"}
            uppercase
            relative
            inline-block
            overflow-hidden
            ${className ? className : ""}
        `}
      {...props}
    >
      {!props.disabled && <BoomEffect />}
      {children}
    </BaseBtn>
  );
};

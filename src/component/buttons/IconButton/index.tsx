import { Colors } from "./../../../types";
import BaseButton, { BaseButtonProps } from "../BaseButton";

export interface IconButtonProps extends BaseButtonProps {
  color?: Colors;
  paddingClasses?: string;
}

export default ({
  children,
  paddingClasses = "p-3",
  color = "primary",
  ...props
}: IconButtonProps) => {
  const colorClasses = props.disabled === true ? "bg-disabled" : `bg-${color}`;

  return (
    <BaseButton
      className={`
          ${colorClasses}
          ${paddingClasses}
          rounded-full
          leading-3
    `}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

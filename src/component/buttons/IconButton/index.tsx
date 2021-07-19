import React from "react";

import BaseButton, { BaseButtonProps } from "../BaseButton";

export interface ButtonProps extends BaseButtonProps {
  color?: "primary" | "secondary" | "transparent";
  paddingClasses?: string;
}

export default ({
  children,
  paddingClasses = "p-3",
  color = "primary",
  ...props
}: ButtonProps) => {
  const colorClasses = props.disabled === true ? "bg-disabled" : `bg-${color}`;

  return (
    <BaseButton
      className={`
          ${colorClasses}
          ${paddingClasses}
          rounded-full
    `}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

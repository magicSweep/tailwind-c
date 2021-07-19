import React from "react";

import BaseButton, { BaseButtonProps } from "../BaseButton";

export interface ButtonProps extends BaseButtonProps {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "text" | "outlined";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const getSizeClasses = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "text-xs px-3 py-2";
    case "medium":
      return "text-sm px-3 py-2";
    case "large":
      return "text-base px-5 py-2";

    default:
      throw new Error(`No implementation for button size | ${size}`);
  }
};

const getVariantAndColorClasses = (
  variant: "contained" | "text" | "outlined",
  color: "primary" | "secondary",
  disabled: boolean
) => {
  switch (variant) {
    case "contained":
      return `
        rounded-sm
        bg-${disabled ? "disabled" : color} 
        text-white 
        ${disabled ? "" : "shadow-md"}
      `;
    case "text":
      return `rounded-sm bg-transparent text-${disabled ? "disabled" : color}`;
    case "outlined":
      return `
        rounded-sm
        bg-transparent 
        text-${disabled ? "disabled" : color} 
        border
        border-solid
        border-${disabled ? "disabled" : color} 
      `;

    default:
      throw new Error(`No implementation for button variant | ${variant}`);
  }
};

export default ({
  children,
  size = "small",
  variant = "text",
  color = "primary",
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const sizeClasses = getSizeClasses(size);

  const variantAndColorClasses = getVariantAndColorClasses(
    variant,
    color,
    props.disabled === true ? props.disabled : false
  );

  if (startIcon === undefined && endIcon === undefined) {
    return (
      <BaseButton
        className={`
          ${sizeClasses}
          ${variantAndColorClasses}
    `}
        {...props}
      >
        {children}
      </BaseButton>
    );
  } else {
    const isStartIcon = startIcon !== undefined;
    const isEndIcon = endIcon !== undefined;

    return (
      <BaseButton
        className={`
          ${sizeClasses}
          ${variantAndColorClasses}
    `}
        {...props}
      >
        <div className="flex flex-auto items-center justify-center">
          {startIcon}
          <span
            className={`
              ${isStartIcon ? "pl-2" : ""} 
              ${isEndIcon ? "pr-2" : ""}
          `}
          >
            {children}
          </span>
          {endIcon}
        </div>
      </BaseButton>
    );
  }
};

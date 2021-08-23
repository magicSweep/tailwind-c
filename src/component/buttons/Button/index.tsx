import { Colors, Sizes } from "./../../../types";
import BaseButton, { BaseButtonProps } from "../BaseButton";

export interface PureButtonProps {
  color?: Colors;
  size?: Sizes;
  variant?: "contained" | "text" | "outlined";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export interface ButtonProps extends BaseButtonProps, PureButtonProps {}

const getSizeClasses = (size: Sizes) => {
  switch (size) {
    case "xs":
      return "text-xs px-3 py-2";
    case "sm":
      return "text-sm px-3 py-2";
    case "lg":
      return "text-base px-5 py-2";
    case "xl":
      return "text-base px-5 py-2";

    default:
      throw new Error(`No implementation for button size | ${size}`);
  }
};

const getVariantAndColorClasses = (
  variant: "contained" | "text" | "outlined",
  color: Colors,
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
  size = "xs",
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

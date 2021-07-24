import React, { FC } from "react";

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  //disabled?: boolean;
  //color?: "primary" | "secondary" | "white" | "title";
}

interface BaseIconProps extends IconProps {
  svgContent: any;
  viewBox?: string;
}

const getColorClass = (
  color: "primary" | "secondary" | "title" | "white",
  disabled: boolean
) => (disabled === true ? "fill-disabled" : `fill-${color}`);
/* 
const getColorClass = (color: "primary" | "secondary", disabled: boolean) => {
  if(disabled === true) return "fill-disabled";
  else return `fill-${color}`
} */

const BaseIcon: FC<BaseIconProps> = ({
  width,
  height,
  className,
  //disabled,
  viewBox,
  svgContent,
  //color = "primary",
}) => {
  //let className = getColorClass(color, disabled === true);

  return (
    <svg
      className={className}
      viewBox={viewBox}
      width={width}
      height={height}
      focusable={false}
      aria-hidden={true}
    >
      {svgContent}
    </svg>
  );
};

export default BaseIcon;

import React, { FC } from "react";
import BaseIcon, { IconProps } from "./../BaseIcon";
//import styles from "./../../../styles/classes.module.scss";
//import classes from "./ArrowIcon.module.scss";

const ArrowSvg = ({ className }: { className: string }) => (
  <>
    <g>
      <g>
        <path
          className={className}
          d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105    L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795    l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </>
);

export interface IArrowIconProps extends IconProps {
  direction: "up" | "down" | "left" | "right";
}

const getTransformClassByDirection = (
  direction: "up" | "down" | "left" | "right"
) => {
  if (direction === "up") {
    return "-rotate-90";
  } else if (direction === "down") {
    return "rotate-90";
  } else if (direction === "left") {
    return "rotate-180";
  } else if (direction === "right") {
    return "rotate-0";
  }
};

const ArrowIcon: FC<IArrowIconProps> = ({
  //iconClass,
  direction,
  ...props
}) => {
  const transformClass = getTransformClassByDirection(direction);

  return (
    <BaseIcon
      svgContent={
        <ArrowSvg className={`origin-center transform ${transformClass}`} />
      }
      //iconClass={fIconClass}
      viewBox="0 0 512.002 512.002"
      {...props}
    />
  );
};

export default ArrowIcon;

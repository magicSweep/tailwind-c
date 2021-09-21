import { FC } from "react";
import BaseIcon, { IconProps } from "./../BaseIcon";
//import classes from "./../../../styles/classes.module.scss";

const descSvg = (
  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
);

const DescIcon: FC<IconProps> = (props) => {
  //const fIconClass = iconClass ? iconClass : "";

  return <BaseIcon svgContent={descSvg} viewBox="0 0 24 24" {...props} />;
};

export default DescIcon;

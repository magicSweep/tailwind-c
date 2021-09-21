import { FC } from "react";
import BaseIcon, { IconProps } from "./../BaseIcon";
//import classes from "./../../../styles/classes.module.scss";

const minusSvg = <path d="M19 13H5v-2h14v2z"></path>;

const MinusIcon: FC<IconProps> = (props) => {
  //const fIconClass = iconClass ? iconClass : "";

  return <BaseIcon svgContent={minusSvg} viewBox="0 0 24 24" {...props} />;
};

export default MinusIcon;

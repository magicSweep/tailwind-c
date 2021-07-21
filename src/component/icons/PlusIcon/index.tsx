import React, { FC } from "react";
import BaseIcon, { IconProps } from "./../BaseIcon";
//import classes from "./../../../styles/classes.module.scss";

const plusSvg = <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>;

const PlusIcon: FC<IconProps> = (props) => {
  //const fIconClass = iconClass ? iconClass : "";

  return <BaseIcon svgContent={plusSvg} viewBox="0 0 24 24" {...props} />;
};

export default PlusIcon;

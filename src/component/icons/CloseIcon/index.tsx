import { FC } from "react";
import BaseIcon, { IconProps } from "./../BaseIcon";
//import classes from "./../../../styles/classes.module.scss";

const closeSvg = (
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
);
const CloseIcon: FC<IconProps> = (props) => {
  //const fIconClass = iconClass ? iconClass : "";

  return <BaseIcon svgContent={closeSvg} viewBox="0 0 24 24" {...props} />;
};

export default CloseIcon;

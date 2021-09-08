import { FC } from "react";
import BaseIcon, { IconProps } from "./../BaseIcon";
//import classes from "./../../../styles/classes.module.scss";

const lockSvg = (
  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
);
const LockIcon: FC<IconProps> = (props) => {
  //const fIconClass = iconClass ? iconClass : "";

  return <BaseIcon svgContent={lockSvg} viewBox="0 0 24 24" {...props} />;
};

export default LockIcon;

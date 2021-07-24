import { FC } from "react";

//type THelperTextType = "success" | "error" | "disabled" | "normal";

export interface IHelperTextProps {
  className?: string;

  //type: THelperTextType;
  children: any;
}

const HelperText: FC<IHelperTextProps> = ({ className, children }) => {
  return (
    <span
      className={`
      w-full min-h-5 
      cursor-default 
      select-none
      align-baseline
      ${className ? className : ""}
    `}
      role="alert"
    >
      {children}
    </span>
  );
};

export default HelperText;

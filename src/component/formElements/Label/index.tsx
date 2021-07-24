import { FC, LabelHTMLAttributes } from "react";

export interface IStyledLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  //upper?: boolean;
  className?: string;
  children: any;
}

const Label: FC<IStyledLabelProps> = ({ className, children, ...props }) => {
  return (
    <label
      className={`
            cursor-inherit
            shadow-none
            box-border
            break-words
            select-none
            ${className ? className : ""}
        `}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

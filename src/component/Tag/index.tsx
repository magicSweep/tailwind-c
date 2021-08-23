import { FC, createElement } from "react";
//import { tagTypeToColor } from "./helper";
import { Colors } from "./../../types";

export interface BaseTagProps {
  as?: any;
  children: any;
  className?: string;
}

export interface TagProps extends Omit<BaseTagProps, "className"> {
  color: Colors;
  htmlFor?: string;
}

export type TagType = "where" | "withWho" | "feeling";

const BaseTag = (props: BaseTagProps) =>
  createElement(props.as ? props.as : "div", props);

const Tag: FC<TagProps> = ({ color, children, ...props }) => {
  //const tagColor = tagTypeToColor(tagType);

  return (
    <BaseTag
      className={`
                outline-none
                whitespace-nowrap no-underline lowercase
                select-none
                h-6 px-3
                inline-flex items-center justify-center 
                rounded-sm
                bg-${color}
                text-white
                text-xs
            `}
      {...props}
    >
      {`#${children}`}
    </BaseTag>
  );
};

export default Tag;

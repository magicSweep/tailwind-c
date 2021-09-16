import { Children, CSSProperties, FC } from "react";
//import classes from "./CarouselOpacity.module.scss";

export interface IChildrenUpdaterProps {
  children: any[];
  activeIndex: number;
  activeItemRef: any;
  //itemClass: string;
}

export const getItemStyle = (
  index: number,
  activeIndex: number
): CSSProperties => {
  if (activeIndex === index) {
    return {
      transitionProperty: "opacity",
      transitionDuration: "0.5s",
      opacity: "1",
    };
  }

  return {};
};

const ChildrenUpdater: FC<IChildrenUpdaterProps> = ({
  children,
  activeIndex,
  activeItemRef,
  //itemClass,
}) => {
  return Children.map(children, (child, index) => {
    let style = getItemStyle(index, activeIndex);

    const isActive = activeIndex === index;
    return (
      <li
        key={`ChildrenUpdater_${activeIndex}_${index}`}
        className="w-full h-full opacity-0 p-0 -ml-full flex-grow-0 flex-shrink-0 first:ml-0"
        data-index={index}
        ref={isActive ? activeItemRef : undefined}
        //className={itemClass}
        style={style}
      >
        {isActive && child}
      </li>
    );
  });
};

export default ChildrenUpdater;

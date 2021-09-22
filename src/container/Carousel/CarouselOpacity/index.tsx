import {
  MutableRefObject,
  ReactNode,
  Children,
  CSSProperties,
  useMemo,
} from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import CarouselOpacityController from "./controller";
//import classes from "./CarouselOpacity.module.scss";
//import ControlPanel from "../../ControlPanel";
//import ChildrenUpdater from "./ChildrenUpdater";
import CarouselWrapper from "./CarouselWrapper";

interface ICarouselOpacityProps {
  //controller: CarouselOpacityController;
  controller: any;
  children: ReactNode[];
  onFetchMore?: () => void;
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

const getWrappedChildren = (
  children: any,
  activeIndex: number,
  activeItemRef: MutableRefObject<any>
  //itemClass,
) => {
  console.log("getWrappedChildren");

  return Children.map(children, (child, index) => {
    let style = getItemStyle(index, activeIndex);

    const uid = Date.now();

    const isActive = activeIndex === index;
    return (
      <li
        key={`CarouseChildren_${activeIndex}_${index}_${uid}`}
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

const CarouselOpacity = ({
  controller,
  children,
  onFetchMore,
}: ICarouselOpacityProps) => {
  //controller.onFetchMore = onFetchMore;
  //const [show, setShow] = useState(true);

  controller.onFetchMore = onFetchMore;

  const carouseItems = useMemo(() => {
    return getWrappedChildren(
      children,
      controller.activeIndex,
      controller.activeItemRef
    );
  }, [controller.activeIndex, children]);

  console.log("[CAROUSEL OPACITY] RENDER");

  return (
    <CarouselWrapper controller={controller}>
      {carouseItems}
      {/*  <ChildrenUpdater
        activeIndex={controller.activeIndex}
        activeItemRef={controller.activeItemRef}
      >
        {children}
      </ChildrenUpdater> */}
    </CarouselWrapper>
  );
};

export default CarouselOpacity;

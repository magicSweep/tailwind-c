import React, { ReactNode, FC } from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import ChildrenUpdater from "./ChildrenUpdater";
//import classes from "./CarouselOpacity.module.scss";
import CarouselOpacityController from "./controller";

interface ICarouselWrapper {
  controller: CarouselOpacityController;
  children: ReactNode;
  //onFetchMore?: () => void;
}

const CarouselWrapper: FC<ICarouselWrapper> = ({ controller, children }) => {
  //console.log("[CAROUSEL OPACITY WIDGET] RENDER", controller.activeIndex);

  return (
    <div
      onMouseDown={controller.onMouseDown}
      onTouchStart={controller.onTouchStart}
      onTouchEnd={controller.onTouchEnd}
      className="w-full h-full relative"
      ref={controller.containerRef}
    >
      <ul className="w-full h-full list-none flex m-auto p-0">{children}</ul>
    </div>
  );
};

export default CarouselWrapper;

import { ReactNode } from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import CarouselOpacityController from "./controller";
//import classes from "./CarouselOpacity.module.scss";
//import ControlPanel from "../../ControlPanel";
import ChildrenUpdater from "./ChildrenUpdater";
import CarouselWrapper from "./CarouselWrapper";

interface ICarouselOpacityProps {
  //controller: CarouselOpacityController;
  controller: any;
  children: ReactNode[];
  onFetchMore?: () => void;
}

const CarouselOpacity = ({
  controller,
  children,
  onFetchMore,
}: ICarouselOpacityProps) => {
  //controller.onFetchMore = onFetchMore;
  //const [show, setShow] = useState(true);

  controller.onFetchMore = onFetchMore;

  //console.log("[CAROUSEL OPACITY] RENDER", controller.activeIndex);

  return (
    <CarouselWrapper controller={controller}>
      <ChildrenUpdater
        activeIndex={controller.activeIndex}
        activeItemRef={controller.activeItemRef}
      >
        {children}
      </ChildrenUpdater>
    </CarouselWrapper>
  );
};

export default CarouselOpacity;

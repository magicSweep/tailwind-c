//import { Dispatch, SetStateAction } from "react";
import { calcDecreasedIndex, calcIncreasedIndex, clamp } from "../utils";
//import CalcTranslateX from "./../helper/TranslateX";
import CastTranslateXToOpacity from "./../helper/CastTranslateXToOpacity";
import CarouselController from "../controller";
//import Metricks from "./../helper/Metricks";
//import IdentifyEvent from "./../helper/IdentifyEvent";

export default class CarouselOpacityController extends CarouselController {
  //calc: ICalcTranslateX = new CalcTranslateX();

  /* identifyEvent = new IdentifyEvent();
  metricks = new Metricks();
  calc = new CalcTranslateX(); */
  cast = new CastTranslateXToOpacity();

  opacity: number = 1;

  //containerRef: React.RefObject<HTMLDivElement> | undefined;
  activeItemRef: React.RefObject<HTMLLIElement> | undefined;

  //setState: Dispatch<SetStateAction<any>> | undefined;

  //activeIndex: number = 0;

  //itemsLength: number;

  //onFetchMore: any;
  //resetZoom: any;

  /* constructor(itemsLength: number) {
    this.itemsLength = itemsLength;
  } */

  pointerDown = (pageX: number, pageY: number, targetTouches: number) => {
    //console.log("onPointerDown");

    this.metricks.onTouchStart(pageX, pageY, targetTouches);
    this.identifyEvent.onTouchStart(this.metricks.targetTouches);

    this.cast.onPointerDown();

    if (!this.activeItemRef || !this.activeItemRef.current)
      throw new Error("NO activeItemRef");

    // ONLY FOR TOUCH START
    if (this.identifyEvent.eventType === "MULTI_TOUCH") {
      this.reset();
    } else {
      this.activeItemRef.current.style.transitionProperty = "none";
    }
  };

  pointerMove = (pageX: number, pageY: number) => {
    //console.log("onPointerMove");

    this.metricks.onTouchMove(pageX);

    this.identifyEvent.onTouchMove(
      pageX,
      pageY,
      this.metricks.startTime,
      this.metricks.startX,
      this.metricks.startY
    );

    if (this.identifyEvent.eventType === "MOVE") {
      this.calc.onPointerMove(
        pageX,
        this.metricks.prevPageX,
        this.activeIndex,
        this.itemsLength
      );

      const newOpacity = this.cast.calcOpacityByTranslateX(
        this.calc.translateX
      );

      if (this.opacity !== newOpacity) {
        //set style to activeItemRef
        if (!this.activeItemRef || !this.activeItemRef.current)
          throw new Error("NO activeItemRef");
        this.activeItemRef.current.style.opacity = (this.opacity >= 0.5
          ? this.opacity
          : 0.5
        ).toString();
      }

      this.opacity = newOpacity;
    }

    this.metricks.onTouchMoveAfterAll(pageX);
  };

  pointerUp = (pageX: number, pageY: number) => {
    //console.log("onPointerUp");

    this.metricks.onTouchEnd(pageX, pageY);

    this.identifyEvent.onTouchEnd(
      this.metricks.distX,
      this.metricks.distY,
      this.metricks.elapsedTime
    );

    //this.calc.onPointerUp();

    let newIndex = this.activeIndex;

    if (
      this.identifyEvent.eventType === "MOVE" &&
      this.calc.isEnoughDist(this.metricks.distX)
    ) {
      if (this.calc.isIndexIncrease(this.metricks.distX)) {
        newIndex = calcIncreasedIndex(this.activeIndex, this.itemsLength);
        if (this.activeIndex === newIndex && this.onFetchMore) {
          this.onFetchMore();
        }
      } else {
        newIndex = calcDecreasedIndex(this.activeIndex);
      }
    }

    this.calc.onPointerUp();

    this.opacity = 1;

    if (!this.setState) throw new Error("No setState");

    //console.log("onPointerUp", newIndex);

    this.setState((prevState: any) => {
      //if (newIndex !== prevState.activeIndex && this.resetZoom)
      if (this.resetZoom) this.resetZoom(undefined);

      return {
        ...prevState,
        activeIndex: newIndex,
      };
    });
  };

  reset = () => {
    this.metricks.reset();
    this.identifyEvent.reset();
    this.calc.reset();

    if (!this.activeItemRef || !this.activeItemRef.current)
      throw new Error("Bad activeItemRef");

    this.activeItemRef.current.style.transitionProperty = "opacity";
    this.activeItemRef.current.style.opacity = "1";
  };
}

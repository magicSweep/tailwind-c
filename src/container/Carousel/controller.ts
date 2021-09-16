import { Dispatch, SetStateAction } from "react";

import { calcDecreasedIndex, calcIncreasedIndex, clamp } from "./utils";
import CalcTranslateX from "./helper/TranslateX";
import Metricks from "./helper/Metricks";
import IdentifyEvent from "./helper/IdentifyEvent";

abstract class CarouselController /* <T> implements ICarouselController<T> */ {
  calc = new CalcTranslateX();
  metricks = new Metricks();
  identifyEvent = new IdentifyEvent();

  containerRef: React.RefObject<HTMLDivElement> | undefined;

  //isMultiTouch: boolean = false;

  // values from state
  //isTranslated: boolean = false;
  activeIndex: number = 0;

  //setState: Dispatch<SetStateAction<T>> | undefined;
  setState: Dispatch<SetStateAction<any>> | undefined;

  onFetchMore: undefined | (() => void);

  zoom: number = 1;
  resetZoom: ((event: any) => void) | undefined = undefined;

  //activeIndex: number = 0;
  itemsLength: number;

  constructor(itemsLength: number) {
    this.itemsLength = itemsLength;
  }

  getTranslateX = () => this.calc.translateX;

  onMouseDown = (event: any) => {
    //console.log("RCatrousel mouse down");
    if (this.zoom !== 1) return;

    event.preventDefault();
    event.stopPropagation();

    window.addEventListener("mousemove", this.onMouseMove, false);
    window.addEventListener("mouseup", this.onMouseUp, false);

    this.pointerDown(event.pageX, event.pageY, 0);
  };

  onMouseMove = (event: any) => {
    //console.log("RCatrousel mouse move");
    event.preventDefault();
    event.stopPropagation();

    this.pointerMove(event.pageX, event.pageY);
  };

  onMouseUp = (event: any) => {
    //console.log("RCatrousel mouse up");
    event.preventDefault();
    event.stopPropagation();

    window.removeEventListener("mousemove", this.onMouseMove, false);
    window.removeEventListener("mouseup", this.onMouseUp, false);

    this.pointerUp(event.pageX, event.pageY);
  };

  onTouchStart = (event: any) => {
    //console.log("RCarousel touch start");
    //event.preventDefault();
    //event.stopPropagation();

    /*  if (event.targetTouches.length > 1) {
      this.isMultiTouch = true;
      return;
    } */
    if (this.zoom !== 1) return;

    const touches = event.changedTouches[0];

    this.pointerDown(touches.pageX, touches.pageY, event.targetTouches.length);
  };

  onTouchMove = (event: any) => {
    //if (event.targetTouches.length  > 1) return;
    //if (this.isMultiTouch) return;
    if (this.zoom !== 1) return;

    const touches = event.changedTouches[0];

    /* console.log(
        "RCarousel touch move",
        this.calc.getYScrollFunc(touches.pageX, touches.pageY)
      ); */

    //event.stopPropagation();

    //if (this.calc.getYScrollFunc(touches.pageX, touches.pageY)) return;

    //event.preventDefault();

    this.pointerMove(touches.pageX, touches.pageY);
  };

  onTouchEnd = (event: any) => {
    //console.log("RCarousel touch end");

    if (this.zoom !== 1) return;

    //event.preventDefault();
    //event.stopPropagation();

    //if (event.changedTouches.length > 1) return;
    /* if (this.isMultiTouch) {
      this.isMultiTouch = false;
      return;
    } */

    const touches = event.changedTouches[0];

    this.pointerUp(touches.pageX, touches.pageY);
  };

  onIncreaseIndex = (event: any) => {
    //event.preventDefault();
    //event.stopPropagation();

    const newIndex = calcIncreasedIndex(this.activeIndex, this.itemsLength);

    //console.log("onIncreaseIndex", newIndex);

    if (this.activeIndex === newIndex) {
      //console.log("ON FETCH MORE START");
      if (this.onFetchMore) {
        //console.log("ON FETCH MORE");
        this.onFetchMore();
      } else {
        return;
      }
    }

    if (this.resetZoom) this.resetZoom(undefined);

    //console.log("onIncreaseIndex2", newIndex);

    if (!this.setState) throw new Error("No setState");

    this.setState((prevState: any) => ({
      ...prevState,
      activeIndex: newIndex,
    }));
  };

  onDecreaseIndex = (event: any) => {
    //event.preventDefault();
    //event.stopPropagation();

    const newIndex = calcDecreasedIndex(this.activeIndex);

    //console.log("onDecreaseIndex", newIndex);

    if (this.activeIndex === newIndex) return;

    if (this.resetZoom) this.resetZoom(undefined);

    if (!this.setState) throw new Error("No setState");

    this.setState((prevState: any) => ({
      ...prevState,
      activeIndex: newIndex,
    }));
  };

  onSetIndex = (index: number) => {
    const newIndex = clamp(index, 0, this.itemsLength - 1);

    if (newIndex === this.activeIndex) return;

    if (this.resetZoom) this.resetZoom(undefined);

    if (!this.setState) throw new Error("No setState");

    this.setState((prevState: any) => ({
      ...prevState,
      activeIndex: newIndex,
    }));
  };

  abstract pointerDown: (
    pageX: number,
    pageY: number,
    targetTouches: number
  ) => void;

  abstract pointerMove: (pageX: number, pageY: number) => void;

  abstract pointerUp: (pageX: number, pageY: number) => void;
}

export default CarouselController;

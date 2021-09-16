export type EVENT_TYPE =
  | "ABORT"
  | "INITIALIZE"
  | "CLICK"
  | "DOUBLE_CLICK"
  | "LONG_TAP"
  | "SWIPE"
  | "SWIPE_MOVE"
  | "MOVE"
  | "MULTI_TOUCH";

class IdentifyEvent {
  eventType: EVENT_TYPE = "INITIALIZE";

  clickAndLongtapDistThreshold: number = 15;

  clickTimeThreshold: number = 150;
  longtapTimeThreshold: number = 500;

  noMoveDistThreshold: number = 100;
  timeDelayThreshold: number = 70;

  onTouchStart = (targetTouches: number) => {
    if (targetTouches > 1) {
      this.eventType = "MULTI_TOUCH";
    } else {
      this.eventType = "INITIALIZE";
    }
  };

  onTouchMove = (
    pageX: number,
    pageY: number,
    startTime: number,
    startX: number,
    startY: number
    /* targetTouches: number = 1,
    changedTouches: number = 1 */
  ) => {
    if (this.eventType === "INITIALIZE") {
      if (Date.now() - startTime > this.timeDelayThreshold) {
        if (this.isXDirection(pageX, pageY, startX, startY)) {
          this.eventType = "MOVE";
        } else {
          //wrong direction
          this.eventType = "ABORT";
        }
      }
    }
  };

  onTouchEnd = (distX: number, distY: number, elapsedTime: number) => {
    if (
      Math.abs(distX) < this.clickAndLongtapDistThreshold &&
      Math.abs(distY) < this.clickAndLongtapDistThreshold
    ) {
      if (elapsedTime < this.clickTimeThreshold) {
        this.eventType = "CLICK";
      } else {
        this.eventType = "LONG_TAP";
      }
    }
  };

  reset = () => {
    this.eventType = "ABORT";
  };

  isXDirection = (
    pageX: number,
    pageY: number,
    startX: number,
    startY: number
  ) => {
    const distX = Math.abs(pageX - startX);
    const distY = Math.abs(pageY - startY);

    return distY < distX;
  };
}

export default IdentifyEvent;

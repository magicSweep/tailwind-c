class Metricks {
  isTranslated: boolean = false;

  targetTouches: number = 0;

  startX: number = 0;
  startY: number = 0;

  prevPageX: number = 0;
  lastFiveXTouchMove: number[] = [];
  lastFiveXToucheMoveSum: number = 0;

  distX: number = 0;
  distY: number = 0;

  elapsedTime: number = 0;
  elapsedTimeAfterMove: number = 0;
  startTime: number = 0;
  startTimeAfterMove: number = 0;

  onTouchStart = (pageX: number, pageY: number, targetTouches: number) => {
    if (this.isTranslated === false) {
      // it's first touch start event
      this.targetTouches = targetTouches;
    } else {
      // touch start for another finger
      this.targetTouches += targetTouches;
    }

    this.isTranslated = true;

    this.startX = pageX;
    this.startY = pageY;

    this.prevPageX = pageX;
    this.lastFiveXTouchMove = [];
    this.lastFiveXToucheMoveSum = 0;

    this.distX = 0;
    this.distY = 0;

    this.elapsedTime = 0;
    this.elapsedTimeAfterMove = 0;
    this.startTime = Date.now();
    this.startTimeAfterMove = 0;
  };

  onTouchMove = (
    pageX: number
    //pageY: number
  ) => {
    let speed = this.prevPageX - pageX;

    if (this.lastFiveXTouchMove.length === 5) {
      this.lastFiveXTouchMove.shift();
    }
    this.lastFiveXTouchMove.push(speed);

    //this.prevPageX = pageX;
    this.startTimeAfterMove = Date.now();
  };

  onTouchMoveAfterAll = (
    pageX: number
    //pageY: number
  ) => {
    this.prevPageX = pageX;
  };

  onTouchEnd = (pageX: number, pageY: number) => {
    this.distX = pageX - this.startX; // get total dist traveled by finger while in contact with surface
    this.distY = pageY - this.startY;
    this.elapsedTime = Date.now() - this.startTime;

    this.lastFiveXToucheMoveSum = this.lastFiveXTouchMove.reduce(
      (a: number, b: number) => a + b,
      0
    );

    (this.elapsedTimeAfterMove = Date.now() - this.startTimeAfterMove),
      (this.isTranslated = false);
  };

  reset = () => {
    this.isTranslated = false;

    this.targetTouches = 0;

    this.startX = 0;
    this.startY = 0;

    this.prevPageX = 0;
    this.lastFiveXTouchMove = [];
    this.lastFiveXToucheMoveSum = 0;

    this.distX = 0;
    this.distY = 0;

    this.elapsedTime = 0;
    this.elapsedTimeAfterMove = 0;
    this.startTime = 0;
    this.startTimeAfterMove = 0;
  };
}

export default Metricks;

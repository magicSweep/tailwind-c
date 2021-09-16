class CalcTranslateX {
  //itemsLength = 0;

  //isYScroll = false;
  //isFirstMove = true;

  offset = 30;

  translateX = 0;

  /* onPointerDown = (pageX: number, pageY: number) => {
      this.isTranslated = true;
      this.pageXStart = pageX;
      this.pageYStart = pageY;
      this.prevPageX = pageX;
      this.dist = 0;
    }; */

  /*  onPointerMove = (
      pageX: number,
      pageY: number,
      activeIndex: number,
      itemsLength: number
    ) => {
      //console.log("onPointerMove", pageX);
    
      this.translateX += this.calcTranslateXOnMove(
        pageX,
        activeIndex,
        itemsLength
      );
  
    }; */

  onPointerMove = (
    pageX: number,
    prevPageX: number,
    activeIndex: number,
    itemsLength: number
  ) => {
    /*  console.log(
      "onPointerMove",
      this.calcTranslateXOnMove(pageX, prevPageX, activeIndex, itemsLength)
    ); */

    //if (isYScroll) return;
    this.translateX += this.calcTranslateXOnMove(
      pageX,
      prevPageX,
      activeIndex,
      itemsLength
    );
  };

  onPointerUp = () => {
    this.translateX = 0;
  };

  calcTranslateXOnMove = (
    pageX: number,
    prevPageX: number,
    activeIndex: number,
    itemsLength: number
  ) => {
    //console.log("calcTranslateXOnMove-1", pageX, prevPageX);
    if (activeIndex === 0 && this.translateX > 0) {
      if (pageX > prevPageX) {
        if (this.translateX > this.offset) return 0;

        return 0.3;
      }
    } else if (activeIndex === itemsLength - 1 && this.translateX < 0) {
      if (pageX < prevPageX) {
        if (this.translateX < -this.offset) return 0;

        return -0.3;
      }
    }
    //console.log("calcTranslateXOnMove-2");
    return pageX - prevPageX;
  };

  getStringifyToCssTranslateX = (activeIndex: number, translateX: number) => {
    const translateByActiveIndex = -activeIndex * 100 + "%";

    return "calc(" + translateByActiveIndex + " + " + translateX + "px)";
  };

  isIndexIncrease = (dist: number) => {
    return dist < 0;
  };

  isEnoughDist = (dist: number) => {
    return Math.abs(dist) > 25;
  };

  reset = () => {
    this.translateX = 0;
  };

  /* isYScrollFunc = (pageX: number, pageY: number) => {
    const distX = Math.abs(pageX - this.pageXStart);
    const distY = Math.abs(pageY - this.pageYStart);
    //console.log("distX " + distX);
    //console.log(event);
    return distY > distX;
  }; */
}

export default CalcTranslateX;

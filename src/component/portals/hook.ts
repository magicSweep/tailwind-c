import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export type PositionType = "start" | "end" | "bottom" | "top";
export type Position = {
  top?: number;
  left?: number;
};

export const calcPosition = (
  anchorEl: HTMLElement,
  positionType: PositionType
) => {
  const rect = anchorEl.getBoundingClientRect();

  const windowClientWidth = document.documentElement.clientWidth;

  //console.log("CALC POSITION", rect, windowClientWidth);

  switch (positionType) {
    case "start":
      return {
        top: rect.top,
        left: rect.left,
      };
    case "end":
      return {
        top: rect.top,
        //right: rect.right,
        right: windowClientWidth - rect.left - rect.width,
      };
    case "bottom":
      return {
        top: rect.bottom - 5,
        left: rect.left,
      };
    case "top":
      console.error(`No implementation for position type top`);
      return {
        bottom: rect.top /* rect.bottom - rect.height * 2, */,
        left: rect.left,
      };

    default:
      console.error(`No implementation for position type | ${positionType} |`);
      return {};
  }

  //console.log("POSITION", rect, this.position);
};

export const useContext = (
  //anchorEl: HTMLElement | null,
  //onClose: any,
  positionType: PositionType,
  onClose?: () => void
) => {
  const mainRef = useRef({
    prevShow: false,
  });

  //const [position, setPosition] = useState<Position>({});

  const positionRef: MutableRefObject<Position> = useRef({});

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (currentTarget: any) => {
    //const currentTarget = event.currentTarget;

    setAnchorEl(currentTarget);

    onOpenMenu(currentTarget);
  };

  /*  const closeMenu = () => {
    setAnchorEl(null);

    if (onClose) onClose();
  }; */

  /*   const onScrollAndResize = () => {
    document.removeEventListener("scroll", onScrollAndResize);

    window.removeEventListener("resize", onScrollAndResize);

    closeMenu();
  };  */

  const onCloseMenu = useCallback(() => {
    //event.stopPropagation();
    //console.log("onCloseMenu");
    document.removeEventListener("scroll", onCloseMenu);
    window.removeEventListener("resize", onCloseMenu);

    //setTimeout(2000);

    setAnchorEl(null);

    if (onClose) onClose();

    //closeMenu();
  }, []);

  const onOpenMenu = useCallback(
    (anchorEl: HTMLElement) => {
      document.addEventListener("scroll", onCloseMenu);
      window.addEventListener("resize", onCloseMenu);

      positionRef.current = calcPosition(anchorEl as HTMLElement, positionType);

      //console.log("CALC POSITION 2", positionRef.current);
    },
    [positionType]
  );

  /*  useEffect(() => {
    const show = Boolean(anchorEl);

    if (show === true && mainRef.current.prevShow === false) {
      onOpenMenu();
      mainRef.current.prevShow = true;
    }

    if (show === false && mainRef.current.prevShow === true) {
      mainRef.current.prevShow = false;
    }
  }, [anchorEl]); */

  return {
    // timeout,
    show: Boolean(anchorEl),
    position: positionRef.current,
    close: onCloseMenu,
    open: openMenu,
  };
};

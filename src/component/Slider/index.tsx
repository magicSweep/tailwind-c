import {
  ComponentProps,
  CSSProperties,
  FC,
  useRef,
  useState,
  useEffect,
  MutableRefObject,
} from "react";

type TrackType = "rail" | "track";

const Track = ({
  type,
  style,
}: {
  children?: any;
  type: TrackType;
  style?: CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={`
             absolute top-1/2 transform -translate-y-1/2 
             bg-primary
            ${type === "rail" ? "opacity-40" : ""}
            ${type === "track" ? "border border-solid border-primary" : ""}
            h-1 w-full 
            rounded-xl
            cursor-pointer
             `}
    ></div>
  );
};

const getMarks = (coords: number[]) => {
  return coords.map((val, i) => {
    return (
      <div
        key={`${val}_${i}`}
        className={`
            absolute top-1/2
            transform -translate-y-1/2 -translate-x-px
            w-0.5 h-0.5 
            rounded-full bg-white`}
        style={{ left: `${val}%` }}
        data-index={i}
      ></div>
    );
  });
};

const Control: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <span
      {...props}
      className={`
            absolute top-1/2
            transform -translate-y-1/2
            w-5 h-5
            rounded-full
            outline-none
            bg-primary
            shadow-lg
            cursor-pointer
            ${className ? className : ""}
        `}
    ></span>
  );
};

type MainStore = {
  isDown: boolean;
  prevPageX: number;
  translateX: number;
  prevTranslateX: number;
  prevIndex: number;
  rootWidth: number;
  markCoords: number[];
  markOffset: number;
};

export const useSlider = (
  step: number,
  onIndexIncrease: () => void,
  onIndexDecrease: () => void
) => {
  const mainRef: MutableRefObject<MainStore> = useRef({
    isDown: false,
    prevPageX: 0,
    translateX: 0,
    prevTranslateX: 0,
    //prevTranslateX: 0,
    prevIndex: 0,
    rootWidth: 0,
    markCoords: [],
    markOffset: 0,
  });

  const [index, setIndex] = useState(() => {
    const offset = Math.round(100 / (step - 1));

    mainRef.current.markOffset = offset;

    for (let i = 1; i <= step - 2; i++) {
      mainRef.current.markCoords.push(offset * i);
    }

    return 0;
  });

  const rootRef = useRef(null);

  mainRef.current.prevIndex = index;

  const onMouseDown = (event: any) => {
    mainRef.current.isDown = true;
    mainRef.current.prevPageX = event.pageX;
    mainRef.current.rootWidth = (rootRef.current as any).getBoundingClientRect().width;
    mainRef.current.prevTranslateX =
      mainRef.current.markOffset * mainRef.current.prevIndex;
    //setTranslateX();

    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("mouseup", onMouseUp, false);
    //console.log((rootRef.current as any).getBoundingClientRect().left);
    //console.log("MOUSE DOWN", event.pageX, { ...mainRef.current });
  };

  const onMouseUp = (event: any) => {
    mainRef.current.isDown = false;
    mainRef.current.prevPageX = event.pageX;

    window.removeEventListener("mousemove", onMouseMove, false);
    window.removeEventListener("mouseup", onMouseUp, false);

    mainRef.current.prevTranslateX = mainRef.current.translateX;
  };

  const onMouseMove = (event: any) => {
    if (mainRef.current.isDown === false) return;

    const { prevTranslateX, prevPageX } = mainRef.current;

    let newTranslateX =
      prevTranslateX +
      ((event.pageX - prevPageX) / mainRef.current.rootWidth) * 100;

    //console.log("MOUSE MOVE", newTranslateX);

    newTranslateX =
      newTranslateX < 0 ? 0 : newTranslateX > 100 ? 100 : newTranslateX;

    // Does index increase
    if (
      mainRef.current.prevIndex < step &&
      newTranslateX >
        mainRef.current.prevIndex * mainRef.current.markOffset +
          mainRef.current.markOffset / 2
    ) {
      mainRef.current.prevIndex = mainRef.current.prevIndex + 1;
      setIndex(mainRef.current.prevIndex);
      onIndexIncrease();
    }
    // Does index decrease
    else if (
      mainRef.current.prevIndex > 0 &&
      newTranslateX <
        mainRef.current.prevIndex * mainRef.current.markOffset -
          mainRef.current.markOffset / 2
    ) {
      mainRef.current.prevIndex = mainRef.current.prevIndex - 1;
      setIndex(mainRef.current.prevIndex);
      onIndexDecrease();
    }

    mainRef.current.translateX = newTranslateX;
  };

  return {
    mainRef,
    index,
    rootRef,
    onMouseDown,
    setIndex,
  };
};

export interface SliderProps {
  mainRef: MutableRefObject<MainStore>;
  index: number;
  //setIndex: any;
  rootRef: MutableRefObject<any>;
  onMouseDown: (event: any) => void;
}

export const Slider: FC<SliderProps> = ({
  mainRef,
  index,
  rootRef,
  onMouseDown,
}) => {
  // const { mainRef, index, setIndex, rootRef, onMouseDown } = useSlider(step);

  const marks = getMarks(mainRef.current.markCoords);

  const offset = index * mainRef.current.markOffset;

  //console.log("RENDER SLIDER", { ...mainRef.current }, index);

  return (
    <div className="relative py-3 px-0 w-full" ref={rootRef}>
      <Track type="rail" />
      <Track style={{ width: `calc(${offset}% - 10px)` }} type="track" />
      {marks}
      <Control
        style={{ left: `calc(${offset}% - 10px)` }}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

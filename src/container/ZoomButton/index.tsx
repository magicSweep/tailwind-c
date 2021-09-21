import ZoomInIcon from "../../component/icons/ZoomInIcon";
import ZoomOutIcon from "../../component/icons/ZoomOutIcon";
import PlusIcon from "../../component/icons/PlusIcon";
import MinusIcon from "../../component/icons/MinusIcon";
import IconButton from "../../component/buttons/IconButton";
import { FC, MutableRefObject, useRef, useState } from "react";
import Tooltip from "../../component/portals/Tooltip";
import { Slider, useSlider } from "../../component/Slider";
import Fade from "../../component/transitions/Fade";

type Position = {
  bottom?: number;
  right?: number;
  top?: number;
  left?: number;
};

const SliderWithControls = ({
  steps,
  onIndexDecrease,
  onIndexIncrease,
}: {
  steps: number;
  onIndexIncrease: () => void;
  onIndexDecrease: () => void;
}) => {
  const { setIndex, ...props } = useSlider(
    steps,
    onIndexIncrease,
    onIndexDecrease
  );

  const handleIncreaseIndex = () => {
    setIndex((index) => (index < steps - 1 ? index + 1 : steps - 1));
    onIndexIncrease();
  };

  const handleDecreaseIndex = () => {
    setIndex((index) => (index > 0 ? index - 1 : 0));
    onIndexDecrease();
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="mr-3">
        <IconButton onClick={handleDecreaseIndex} color="transparent">
          <MinusIcon width={14} height={14} className="fill-primary" />
        </IconButton>
      </div>
      <Slider {...props} />
      <div className="ml-3">
        <IconButton onClick={handleIncreaseIndex} color="transparent">
          <PlusIcon width={14} height={14} className="fill-primary" />
        </IconButton>
      </div>
    </div>
  );
};

export interface ZoomButtonProps {
  steps: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const ZoomButton: FC<ZoomButtonProps> = ({
  steps,
  onZoomIn,
  onZoomOut,
}) => {
  //const [show, setShow] = useState(false);

  const [state, setState] = useState<{
    show: boolean;
    position: undefined | Position;
  }>({
    show: false,
    position: undefined,
  });

  const iconBtnRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  //const sliderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const onClick = () => {
    const rect = (iconBtnRef.current as HTMLDivElement).getBoundingClientRect();

    if (state.show === false) {
      setState({
        show: true,
        position: {
          top: rect.height - 5,
          left: -72,
        },
      });
    } else {
      setState((state) => ({
        ...state,
        show: false,
      }));
    }
  };

  return (
    <div className="relative">
      <div ref={iconBtnRef}>
        <Tooltip positionType="bottom" text="Изменить масштаб фото">
          <IconButton
            aria-label="показать панель изменения масштаба фотографии"
            color="transparent"
            onClick={onClick}
          >
            <ZoomInIcon width={24} height={24} className="fill-white" />
          </IconButton>
        </Tooltip>
      </div>

      <Fade show={state.show}>
        <div
          style={{ ...state.position }}
          className="absolute rounded shadow-lg w-48 bg-paper"
        >
          <SliderWithControls
            steps={steps}
            onIndexDecrease={onZoomOut}
            onIndexIncrease={onZoomIn}
          />
        </div>
      </Fade>
    </div>
  );
};

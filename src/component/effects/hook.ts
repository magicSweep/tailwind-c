import { useState } from "react";

export const useMouseDown = () => {
  const [isDown, setIsDown] = useState(false);

  const onMouseDown = () => {
    setIsDown(true);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  return {
    onMouseUp,
    onMouseDown,
    isDown,
  };
};

import {
  MutableRefObject,
  useRef,
  Children,
  cloneElement,
  useEffect,
  useState,
} from "react";
import Fade from "../../transitions/Fade";
import Portal from "../Portal";

const getPosition = (anchorEl: null | HTMLElement) => {
  if (!anchorEl) throw new Error("No anchor element...");

  const rect = anchorEl.getBoundingClientRect();

  return {
    top: rect.bottom,
    left: rect.left,
  };
};

const Popper = ({ anchorEl, onClose, children }: any) => {
  let position: IPosition = {};

  if (anchorEl) position = getPosition(anchorEl);

  const show = Boolean(anchorEl);

  //console.log("TOOLTIP RENDER", show, position, anchorEl);

  return (
    <Fade show={show}>
      <Portal type="context-menu">
        <div
          className={`
                absolute 
                bg-gray-500
                overflow-visible
                shadow-lg
                rounded
                mt-3
                outline-none 
                flex justify-center items-center
              `}
          style={position}
          role=""
        >
          {children}
        </div>
      </Portal>
    </Fade>
  );
};

export default Popper;

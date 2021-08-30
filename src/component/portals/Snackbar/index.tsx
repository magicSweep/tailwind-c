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

const Snackbar = ({ show, onClose, children }: any) => {
  //const anchorRef: MutableRefObject<any> = useRef();
  const timerIdRef = useRef<any>();

  useEffect(() => {
    timerIdRef.current = setTimeout(onClose, 6000);

    return () => {
      clearTimeout(timerIdRef.current);
    };
  });

  console.log("SNACKBAR RENDER", show);

  return (
    <>
      <Fade show={show}>
        <Portal type="alert">
          <div
            className={`
                fixed 
               h-0
               top-14
               w-full
               overflow-visible
               flex justify-center items-center
              `}
            role="alert"
          >
            {children}
          </div>
        </Portal>
      </Fade>
    </>
  );
};

export default Snackbar;

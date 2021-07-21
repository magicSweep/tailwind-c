import { FC } from "react";
import Portal from "../Portal";
import { ModalProps, BackDrop, ModalWidget, ModalWrapper } from "./Modal";
import { CSSTransition } from "react-transition-group"; // ES6
import Fade from "./../../transitions/Fade";

import Move from "./../../transitions/Move";

const Modal: FC<ModalProps & { show: boolean }> = ({
  show,
  onClose,
  type,
  children,
}) => {
  console.log("[RENDER MODAL]", children);

  //if (!elementRef.current) return null;

  return (
    <>
      <Fade show={show}>
        <Portal type="modal">
          <BackDrop onClose={onClose} />
        </Portal>
      </Fade>

      <Move show={show}>
        <Portal type="modal">
          <ModalWrapper onClick={onClose}>
            {/*  <BackDrop onClose={onClose} /> */}
            <ModalWidget type={type} onClose={onClose}>
              {children}
            </ModalWidget>
          </ModalWrapper>
        </Portal>
      </Move>
    </>
  );

  /*  <CSSTransition
          in={show}
          timeout={500}
          unmountOnExit
          classNames={{
            /*   enter: "opacity-0 transform translate-y-full",
          enterActive:
            "opacity-100 transform translate-y-0 transition-all duration-1000",
          exit:
            "opacity-0 transform translate-y-full transition-all duration-1000",
          exitActive: "exit-active", /
            //exitActive: "opacity-0",
            enter: "modal--enter",
            enterActive: "modal--enter-active",
            exit: "modal--exit",
            exitActive: "modal--exit-active",
          }}
        >
          <ModalWidget type={type} onClose={onClose}>
            {children}
          </ModalWidget>
        </CSSTransition> */

  /* return (
    <Portal type="modal">
      <BackDrop onClose={onClose} />
      <ModalWidget type={type} onClose={onClose}>
        {children}
      </ModalWidget>
    </Portal>
  ); */
};

export default Modal;

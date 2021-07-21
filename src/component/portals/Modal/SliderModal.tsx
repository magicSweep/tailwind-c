import { FC } from "react";
import Portal from "../Portal";
//import { ModalProps  } from "./Modal";
//import { CSSTransition } from "react-transition-group"; // ES6
import Scale from "../../transitions/Scale";

export const ModalWrapper = ({ children }: any) => (
  <div
    className={`
          fixed inset-0
          flex items-center justify-center
          bg-transparent
          pointer-events-auto
          overflow-hidden
        `}
  >
    {children}
  </div>
);

const Modal: FC<{ show: boolean; children: any }> = ({ show, children }) => {
  console.log("[RENDER MODAL]");

  //if (!elementRef.current) return null;

  return (
    <>
      <Scale show={show}>
        <Portal type="modal">
          <ModalWrapper>{children}</ModalWrapper>
        </Portal>
      </Scale>
    </>
  );
};

export default Modal;

import { FC, useEffect } from "react";
//import classes from "./Modal.module.scss";
//import styles from "./../../styles/classes.module.scss";
//import CloseButton from "../CloseButton";

type TModalType = "slider" | "form";

export interface ModalProps {
  type: TModalType;
  //show: boolean;
  onClose: (event: any) => void | undefined;
  children: any;
}

export const ModalWrapper = ({ children, onClick }: any) => (
  <div
    onClick={onClick}
    className={`
        fixed inset-0
        flex items-center justify-center
        bg-transparent
        pointer-events-auto
        overflow-visible
      `}
  >
    {children}
  </div>
);

export const BackDrop = ({ onClose }: any) => (
  <div
    className={`
        absolute inset-0
        bg-gray-700 bg-opacity-40
    `}
    onClick={onClose}
  ></div>
);

export const ModalWidget: FC<ModalProps> = ({ onClose, type, children }) => {
  /* useEffect(() => {
    if (show === true) document.body.classList.add(styles.stopScrolling);
    else document.body.classList.remove(styles.stopScrolling);
  }, [show]); */

  /* let wrapperClass = "";

  if (type === "form") wrapperClass = classes.wrapperForm;
  else if (type === "slider") wrapperClass = classes.wrapperSlider; */

  console.log("[RENDER MODAL]", type);

  /* if (type === "slider") {
    return <ModalWrapper onClose={onClose}>{children}</ModalWrapper>;
  } */

  return (
    <div
      // max-w-101 max-h-101 text-left bg-paper
      className={`
            shadow-lg rounded-sm
            box-border
            relative
            overflow-y-auto
            flex items-stretch flex-col flex-nowrap
            outline-none
            min-w-72 min-h-36
            max-w-101 max-h-101
        `}
    >
      {children}
      {/*  <div
        className={`
            relative
            overflow-y-auto
            flex-grow
            flex justify-center items-center flex-wrap
        `}
      >
        {children}
      </div> */}
    </div>
  );
};
/* 
const Modal: FC<ModalProps> = ({ onClose, type, children }) => {


  console.log("[RENDER MODAL]", type);


  return (
    <ModalWrapper>
      {/*  <BackDrop onClose={onClose} /> /}
      <div
        className={`
            shadow-lg rounded-sm
            bg-paper
            box-border
            relative
            text-left
            overflow-y-auto
            
            outline-none
            min-w-72 min-h-36
            max-w-101 max-h-101
        `}
      >
        <div
          className={`
            relative
            overflow-y-auto
            flex-grow
            flex justify-center items-center
        `}
        >
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal; */

/* import React, { FC, useEffect } from "react";
//import classes from "./Modal.module.scss";
//import styles from "./../../styles/classes.module.scss";
//import CloseButton from "../CloseButton";

type TModalType = "slider" | "form";

export interface ModalProps {
  type: TModalType;
  //show: boolean;
  onClose: (event: any) => void | undefined;
  children: any;
}

const ModalWrapper = ({ children }: any) => (
  <div
    className={`
        fixed h-0 w-0
        flex items-center justify-center
        bg-transparent
        pointer-events-auto
        overflow-visible
      `}
  >
    {children}
  </div>
);

export const BackDrop = ({ onClose }: any) => (
  <div
    className={`
        absolute inset-0
        bg-gray-700 bg-opacity-40
    `}
    onClick={onClose}
  ></div>
);

const Modal: FC<ModalProps> = ({ onClose, type, children }) => {
  /* useEffect(() => {
    if (show === true) document.body.classList.add(styles.stopScrolling);
    else document.body.classList.remove(styles.stopScrolling);
  }, [show]); */

/* let wrapperClass = "";

  if (type === "form") wrapperClass = classes.wrapperForm;
  else if (type === "slider") wrapperClass = classes.wrapperSlider; /

  console.log("[RENDER MODAL]", type);

  /* if (type === "slider") {
    return <ModalWrapper onClose={onClose}>{children}</ModalWrapper>;
  } /

  return (
    <ModalWrapper>
      {/*  <BackDrop onClose={onClose} /> /}
      <div
        className={`
            shadow-lg rounded-sm
            bg-paper
            box-border
            relative
            text-left
            overflow-y-auto
            flex items-stretch flex-col flex-nowrap
            outline-none
            min-w-72 min-h-36
            max-w-101 max-h-101
        `}
      >
        <div
          className={`
            relative
            overflow-y-auto
            flex-grow
            max-h-screen
        `}
        >
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
 */

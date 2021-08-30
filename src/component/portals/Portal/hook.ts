import { useRef, useEffect, MutableRefObject } from "react";
import PortalController from "./controller";
import { ModalType } from "./types";

const modalRoot = document.getElementById("modal");
const alertRoot = document.getElementById("alert");

export const usePortal = (type: ModalType) => {
  const mainRef: MutableRefObject<{
    init: boolean;
    controller?: PortalController;
  }> = useRef({
    init: false,
    controller: undefined,
  });

  if (mainRef.current.init === false) {
    if (modalRoot === null || alertRoot === null)
      throw new Error(`Bad modal or alert root | ${modalRoot} | ${alertRoot}`);
    mainRef.current.controller = new PortalController(
      type,
      modalRoot,
      alertRoot
    );
    mainRef.current.init = true;
  }

  const controller = mainRef.current.controller as PortalController;

  useEffect(() => {
    controller.componentDidMount();

    return controller.componentWillUnmount;
  }, []);

  return controller.element;
};

/* import { useRef, useEffect, MutableRefObject } from "react";
import PortalController from "./controller";

const modalRoot = document.getElementById("modal");
const alertRoot = document.getElementById("alert");

export const usePortal = (type: ModalType) => {
  const mainRef: MutableRefObject<{
    init: boolean;
    controller?: PortalController;
  }> = useRef({
    init: false,
    controller: undefined,
  });

  if (mainRef.current.init === false) {
    if (modalRoot === null || alertRoot === null)
      throw new Error(`Bad modal or alert root | ${modalRoot} | ${alertRoot}`);
    mainRef.current.controller = new PortalController(
      type,
      modalRoot,
      alertRoot
    );
    mainRef.current.init = true;
  }

  const controller = mainRef.current.controller as PortalController;

  useEffect(() => {
    controller.componentDidMount();

    return controller.componentWillUnmount;
  }, []);

  return controller.element;
};
 */

import { useEffect, useRef, MutableRefObject } from "react";
import ContextMenuController from "./controller";

export const useContextMenu = (
  anchorEl: HTMLElement | null,
  positionType: ContextMenuPosition,
  onClose: () => void
) => {
  // INITIALIZATION
  const mainRef: MutableRefObject<{
    init: boolean;
    controller?: ContextMenuController;
  }> = useRef({
    init: false,
    controller: undefined,
  });

  if (mainRef.current.init === false) {
    mainRef.current.controller = new ContextMenuController();
    mainRef.current.init = true;
  }

  const controller = mainRef.current.controller as ContextMenuController;

  controller.anchorEl = anchorEl;
  controller.positionType = positionType;
  controller.onClose = onClose;

  // INITIALIZATION END

  /* useEffect(() => {
    if (anchorEl) {
      controller.onOpenMenu();
    }
  }, [anchorEl]); */

  if (anchorEl) {
    controller.onOpenMenu();
  }

  //console.log("Use hook ", controller.position);

  return {
    position: controller.position,
    onCloseMenu: controller.onClose,
  };
};

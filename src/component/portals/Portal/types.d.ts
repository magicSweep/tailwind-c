interface PortalProps {
  children: any;
  type: ModalType;
}

type ModalType = "modal" | "alert" | "context-menu";

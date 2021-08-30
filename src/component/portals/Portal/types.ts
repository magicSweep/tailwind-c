export interface PortalProps {
  children: any;
  type: ModalType;
}

export type ModalType = "modal" | "alert" | "context-menu";

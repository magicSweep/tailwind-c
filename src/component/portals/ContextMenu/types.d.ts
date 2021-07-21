interface ContextMenyProps {
  anchorEl: HTMLElement | null;
  children: any;
  positionType: ContextMenuPosition;
  onClose: () => void;
}

interface IPosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

type ContextMenuPosition = "start" | "end";

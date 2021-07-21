class ContextMenuController {
  anchorEl: HTMLElement | null = null;
  positionType?: ContextMenuPosition;
  position: IPosition = {};
  onClose?: () => void;

  // WE HIDE OUR MENU ON SCROLL OR RESIZE EVENTS
  onScrollAndResize = () => {
    document.removeEventListener("scroll", this.onScrollAndResize);

    window.removeEventListener("resize", this.onScrollAndResize);

    if (!this.onClose) throw new Error("No onClose function");
    this.onClose();
  };

  onCloseMenu = () => {
    //console.log("onCloseMenu");
    document.removeEventListener("scroll", this.onScrollAndResize);
    window.removeEventListener("resize", this.onScrollAndResize);

    if (!this.onClose) throw new Error("No onClose function");

    this.onClose();
  };

  onOpenMenu = () => {
    document.addEventListener("scroll", this.onScrollAndResize);
    window.addEventListener("resize", this.onScrollAndResize);

    this.setPosition();
  };

  setPosition = () => {
    if (!this.anchorEl) throw new Error("No anchor element...");

    const rect = this.anchorEl.getBoundingClientRect();

    const windowClientWidth = document.documentElement.clientWidth;

    switch (this.positionType) {
      case "start":
        this.position = {
          top: rect.top,
          left: rect.left,
        };
        /* this.position.top = rect.bottom;
        this.position.left = rect.left; */
        break;
      case "end":
        this.position = {
          top: rect.bottom,
          left: windowClientWidth - rect.left - rect.width,
        };
        /* this.position.top = rect.bottom;
        this.position.right = windowClientWidth - rect.left - rect.width; */
        break;

      default:
        throw new Error(
          `No implementation for position type | ${this.positionType} |`
        );
    }

    //console.log("POSITION", rect, this.position);
  };
}

export default ContextMenuController;

//const modalRoot = document.getElementById('modal');
//const alertRoot = document.getElementById('alert');

class PortalController {
  element: HTMLDivElement;
  type: ModalType;
  modalRoot: HTMLElement;
  alertRoot: HTMLElement;

  static numberOfModals = 0;

  constructor(type: ModalType, modalRoot: HTMLElement, alertRoot: HTMLElement) {
    this.element = document.createElement("div");
    this.type = type;
    this.modalRoot = modalRoot;
    this.alertRoot = alertRoot;
  }

  componentDidMount = () => {
    this.appendOurModalElemToRoot();
    this.makeBgStopScroll();
  };

  componentWillUnmount = () => {
    this.removeOurModalElemFromRoot();
    this.makeBgScrollAgain();
  };

  /* createElement = (type: ModalType) => {
    const elem = document.createElement("div");
    if (type === "modal" || type === "context-menu") {
      elem.classList.add("fixed", "top-0", "left-0", "w-full", "h-full");
    } else if (type === "alert")
      elem.classList.add("fixed", "z-50", "top-20", "w-full", "h-px");

    return elem;
  }; */

  appendOurModalElemToRoot = () => {
    if (this.type === "modal" || this.type === "context-menu")
      this.modalRoot.appendChild(this.element);
    else if (this.type === "alert") this.alertRoot.appendChild(this.element);
  };

  removeOurModalElemFromRoot = () => {
    if (this.type === "modal" || this.type === "context-menu")
      this.modalRoot.removeChild(this.element);
    else if (this.type === "alert") this.alertRoot.removeChild(this.element);
  };

  makeBgStopScroll = () => {
    if (this.type === "modal") {
      document.body.classList.add("overflow-hidden", "h-full");
      PortalController.numberOfModals++;
    }
  };

  makeBgScrollAgain = () => {
    if (this.type === "modal") {
      PortalController.numberOfModals--;
      if (PortalController.numberOfModals === 0)
        document.body.classList.remove("overflow-hidden", "h-full");
    }
  };
}

export default PortalController;

/* //const modalRoot = document.getElementById('modal');
//const alertRoot = document.getElementById('alert');

class PortalController {
  element: HTMLDivElement;
  type: ModalType;
  modalRoot: HTMLElement;
  alertRoot: HTMLElement;

  static numberOfModals = 0;

  constructor(type: ModalType, modalRoot: HTMLElement, alertRoot: HTMLElement) {
    this.element = this.createElement(type);
    this.type = type;
    this.modalRoot = modalRoot;
    this.alertRoot = alertRoot;
  }

  componentDidMount = () => {
    this.appendOurModalElemToRoot();
    this.makeBgStopScroll();
  };

  componentWillUnmount = () => {
    this.removeOurModalElemFromRoot();
    this.makeBgScrollAgain();
  };

  createElement = (type: ModalType) => {
    const elem = document.createElement("div");
    if (type === "modal" || type === "context-menu") {
      elem.classList.add("fixed", "top-0", "left-0", "w-full", "h-full");
    } else if (type === "alert")
      elem.classList.add("fixed", "z-50", "top-20", "w-full", "h-px");

    return elem;
  };

  appendOurModalElemToRoot = () => {
    if (this.type === "modal" || this.type === "context-menu")
      this.modalRoot.appendChild(this.element);
    else if (this.type === "alert") this.alertRoot.appendChild(this.element);
  };

  removeOurModalElemFromRoot = () => {
    if (this.type === "modal" || this.type === "context-menu")
      this.modalRoot.removeChild(this.element);
    else if (this.type === "alert") this.alertRoot.removeChild(this.element);
  };

  makeBgStopScroll = () => {
    if (this.type === "modal") {
      document.body.classList.add("overflow-hidden", "h-full");
      PortalController.numberOfModals++;
    }
  };

  makeBgScrollAgain = () => {
    if (this.type === "modal") {
      PortalController.numberOfModals--;
      if (PortalController.numberOfModals === 0)
        document.body.classList.remove("overflow-hidden", "h-full");
    }
  };
}

export default PortalController;
 */

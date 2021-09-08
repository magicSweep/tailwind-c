import { FC } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

const Fade: FC<any> = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={{
        appear: 300,
        enter: 0,
        exit: 0,
      }}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "opacity--enter",
        enterActive: "opacity--enter-active",
        exit: "opacity--exit",
        exitActive: "opacity--exit-active",
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default Fade;

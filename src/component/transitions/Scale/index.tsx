import { FC } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

const Scale: FC<any> = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "scale--enter",
        enterActive: "scale--enter-active",
        exit: "scale--exit",
        exitActive: "scale--exit-active",
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default Scale;

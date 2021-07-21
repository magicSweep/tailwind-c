import { FC } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

const Move: FC<any> = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      unmountOnExit
      mountOnEnter
      classNames={{
        enter: "move--enter",
        enterActive: "move--enter-active",
        exit: "move--exit",
        exitActive: "move--exit-active",
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default Move;

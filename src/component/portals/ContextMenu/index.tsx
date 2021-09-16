import {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  Children,
  cloneElement,
} from "react";
import Fade from "../../transitions/Fade";
import Portal from "../Portal";
//import { useContextMenu } from "./hook";
import BoomEffect from "./../../effects/Boom";

export const MenuItem: FC<any> = ({ onClick, children }) => {
  return (
    <li
      onClick={onClick}
      className={`
        px-4
        py-2
        m-0
        relative 
        text-left text-sm text-body
        flex items-center justify-start
        select-none
        cursor-pointer
      `}
      role="menuitem"
    >
      <BoomEffect />
      {children}
    </li>
  );
};

const ContextMenu: FC<any> = ({ show, position, onClose, children }) => {
  //console.log("RENDER CONTEX MENU", position);

  //if (deleteWithoutAnim) return null;

  // {getUpdatedChildren(children, onClose)}
  return (
    <Fade show={show}>
      <Portal type="context-menu">
        <div>
          <div className="fixed inset-0" onClick={onClose}></div>
          <ul
            className={`
              fixed 
              bg-paper 
              overflow-hidden 
              shadow-lg
              max-w-200
              rounded 
              px-0
              m-0
              outline-none 
              list-none
            `}
            style={position}
            role="menu"
          >
            {children}
          </ul>
        </div>
      </Portal>
    </Fade>
  );
};

export default ContextMenu;

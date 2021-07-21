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
import { useContextMenu } from "./hook";
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

const getUpdatedChildren = (children: any[], onCloseMenu: () => void) => {
  return Children.map(children, (child, i) => {
    //console.log("Before clone child", child.props);

    //console.log("CHILD", child);

    if (!child) return null;

    let newChild = cloneElement(child, {
      onClick: child.props.onClick
        ? (event: any) => {
            child.props.onClick(event);
            onCloseMenu();
          }
        : onCloseMenu,
    });

    return newChild;
  });
};

const ContextMenu: FC<ContextMenyProps> = ({
  anchorEl,
  positionType,
  onClose,
  children,
}) => {
  const { position, onCloseMenu } = useContextMenu(
    anchorEl,
    positionType,
    onClose
  );

  const show = Boolean(anchorEl);

  //console.log("RENDER CONTEX MENU", position);

  return (
    <Fade show={show}>
      <Portal type="context-menu">
        <div>
          <div className="fixed inset-0" onClick={onCloseMenu}></div>
          <ul
            className={`
                absolute 
                bg-paper 
                overflow-hidden 
                shadow-lg
                rounded 
                px-0
                m-0
                outline-none 
                list-none
              `}
            style={position}
            role="menu"
          >
            {getUpdatedChildren(children, onCloseMenu)}
          </ul>
        </div>
      </Portal>
    </Fade>
  );
};

export default ContextMenu;

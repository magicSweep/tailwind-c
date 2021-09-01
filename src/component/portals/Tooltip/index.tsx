import {
  MutableRefObject,
  useRef,
  Children,
  cloneElement,
  useEffect,
  useState,
} from "react";
import Fade from "../../transitions/Fade";
import Portal from "../Portal";

const getUpdatedChildren = (
  children: any[],
  onMouseEnter: (event: any) => void,
  onMouseLeave: (event: any) => void
) => {
  return Children.map(children, (child, i) => {
    //console.log("Before clone child", child.props);

    //console.log("CHILD", child);

    if (!child) return null;

    let newChild = cloneElement(child, {
      onMouseEnter: child.props.onMouseEnter
        ? (event: any) => {
            child.props.onMouseEnter(event);
            onMouseEnter(event);
          }
        : onMouseEnter,
      onMouseLeave: child.props.onMouseLeave
        ? (event: any) => {
            child.props.onMouseLeave(event);
            onMouseLeave(event);
          }
        : onMouseLeave,
    });

    return newChild;
  });
};

const getPosition = (anchorEl: null | HTMLElement) => {
  if (!anchorEl) throw new Error("No anchor element...");

  const rect = anchorEl.getBoundingClientRect();

  return {
    top: rect.bottom,
    left: rect.left,
  };
};

const Tooltip = ({ text, children }: any) => {
  //const anchorRef: MutableRefObject<any> = useRef();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const positionRef: MutableRefObject<IPosition> = useRef({});

  //let position: IPosition = {};

  const onMouseEnter = (event: any) => {
    console.log("ON MOUSE ENTER");
    setAnchorEl(event.currentTarget);
  };

  const onMouseLeave = (event: any) => {
    console.log("ON MOUSE LEAVE");
    setAnchorEl(null);
  };

  const updatedChildren = getUpdatedChildren(
    children,
    onMouseEnter,
    onMouseLeave
  );

  //if (anchorEl) position = getPosition(anchorEl);
  if (anchorEl) positionRef.current = getPosition(anchorEl);

  const show = Boolean(anchorEl);

  console.log("TOOLTIP RENDER", show, positionRef.current, anchorEl);

  return (
    <>
      {updatedChildren}
      <Fade show={show}>
        <Portal type="context-menu">
          <div
            className={`
              absolute 
              bg-gray-500
              overflow-hidden 
              shadow-lg
              rounded
              mt-3
              outline-none 
              flex justify-center items-center
            `}
            style={positionRef.current}
            role="tooltip"
          >
            <span className="text-gray-100 text-xs py-1 px-2">{text}</span>
          </div>
        </Portal>
      </Fade>
    </>
  );
};

export default Tooltip;

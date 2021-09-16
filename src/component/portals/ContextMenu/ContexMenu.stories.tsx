import { useState, FC } from "react";
import ContextMenu, { MenuItem } from ".";
import Fade from "../../transitions/Fade";
import Button from "../../buttons/Button";
import Portal from "../Portal";
import { useContext } from "./../hook";
import ExitToAppIcon from "../../icons/ExitToAppIcon";
import { PositionType } from "../hook";

export default {
  component: ContextMenu,
  title: "Portals/ContexMenu",
};

export const Default = () => {
  const [positionType, setPositionType] = useState<PositionType>("start");

  const { show, position, close, open } = useContext(positionType, () =>
    console.log("------Close")
  );

  return (
    <div>
      <div style={{ height: "40vh" }}></div>

      <Button onClick={() => setPositionType("start")}>
        Set START position type
      </Button>
      <Button onClick={() => setPositionType("end")}>
        Set END position type
      </Button>

      <hr />

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event: any) => open(event.currentTarget)}
      >
        Open Menu
      </Button>

      <ContextMenu show={show} onClose={close} position={position}>
        <MenuItem onClick={close}>Profile</MenuItem>
        <MenuItem onClick={close}>My account</MenuItem>
        <MenuItem onClick={close}>
          <ExitToAppIcon width={16} height={16} className="fill-secondary" />
          <p className="p-0 ml-2 my-0">Logout</p>
        </MenuItem>
      </ContextMenu>
      <div style={{ height: "150vh" }}></div>
    </div>
  );
};

export const Test = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(!show)}>Show</Button>

      <Fade show={show}>
        <Portal type="context-menu">
          <div
            className={`
              fixed 
              w-56
              h-56
              overflow-hidden 
              shadow-lg
              rounded 
              px-0
              m-0
              bg-red-400
            `}
            style={{ top: 100, left: 100 }}
            role="menu"
          ></div>
        </Portal>
      </Fade>
    </>
  );
};

/* 
import { useState } from "react";
import ContextMenu, { MenuItem, getUpdatedChildren } from ".";
import Fade from "../../transitions/Fade";
import Button from "../../buttons/Button";
import Portal from "../Portal";
import { useContextMenu } from "./ihook";

export default {
  component: ContextMenu,
  title: "Portals/ContexMenu",
};

export const Default = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div style={{ height: "40vh" }}></div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <ContextMenu
        anchorEl={anchorEl}
        onClose={handleClose}
        positionType="start"
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </ContextMenu>
      <div style={{ height: "150vh" }}></div>
    </div>
  );
}; */

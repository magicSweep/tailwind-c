import { useState } from "react";
import ContextMenu, { MenuItem } from ".";
import Button from "../../buttons/Button";

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
};

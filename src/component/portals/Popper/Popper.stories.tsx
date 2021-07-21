import { useState } from "react";
import Popper from ".";
import Button from "../../buttons/Button";

export default {
  component: Popper,
  title: "Portals/Popper",
};

export const Default = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((prevAnchor) => (prevAnchor ? null : event.currentTarget));
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
        variant="contained"
      >
        Open Popper
      </Button>
      <Popper anchorEl={anchorEl} onClose={handleClose}>
        <div className="w-72 h-24 bg-blue-400"></div>
      </Popper>
      <div style={{ height: "150vh" }}></div>
    </div>
  );
};

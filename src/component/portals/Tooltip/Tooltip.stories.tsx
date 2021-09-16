import { useState } from "react";
import Tooltip from ".";
import Button from "../../buttons/Button";
import IconButton from "../../buttons/IconButton";
import SearchIcon from "../../icons/SearchIcon";
import { PositionType } from "../hook";

export default {
  component: Tooltip,
  title: "Portals/Tooltip",
};

export const Default = () => {
  const [positionType, setPositionType] = useState<PositionType>("bottom");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{ height: "50vh" }}></div>
      <Button onClick={() => setPositionType("top")}>
        Set TOP position type
      </Button>
      <Button onClick={() => setPositionType("bottom")}>
        Set BOTTOM position type
      </Button>

      <hr />
      <br />

      <div className="fixed bottom-8 right-12">
        <Tooltip text="Поиск фото" positionType={positionType}>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="primary"
          >
            <SearchIcon width={32} height={32} className="fill-white" />
          </IconButton>
        </Tooltip>
      </div>
      <div style={{ height: "150vh" }}></div>
    </>
  );
};

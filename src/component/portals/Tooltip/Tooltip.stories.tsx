import { useState } from "react";
import Tooltip from ".";
import IconButton from "../../buttons/IconButton";
import SearchIcon from "../../icons/SearchIcon";

export default {
  component: Tooltip,
  title: "Portals/Tooltip",
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
    <>
      <Tooltip text="Поиск фото">
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="primary"
        >
          <SearchIcon width={32} height={32} className="fill-white" />
        </IconButton>
      </Tooltip>
    </>
  );
};

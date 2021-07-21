import { useState } from "react";
import Snackbar from ".";
import Button from "../../buttons/Button";

export default {
  component: Snackbar,
  title: "Portals/Snackbar",
};

export const Default = () => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={onShow}>Show alert</Button>

      <Snackbar onClose={onClose} show={show}>
        <div className="w-56 h-22 flex justify-center items-center bg-green-300">
          <p className="text-primary">Hello, form alert</p>
        </div>
      </Snackbar>

      <div style={{ height: "150vh" }}></div>
    </>
  );
};

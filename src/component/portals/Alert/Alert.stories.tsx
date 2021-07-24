import { useState } from "react";
import Alert from ".";
import Button from "../../buttons/Button";

export default {
  component: Alert,
  title: "Portals/Alert",
};

export const Default = () => {
  const [state, setState] = useState({
    show: false,
    type: "error",
  });

  const onShow = (type: any) => {
    setState({
      show: true,
      type,
    });
  };

  const onClose = () => {
    setState((prevState) => ({
      show: false,
      type: prevState.type,
    }));
  };

  return (
    <>
      <Button onClick={() => onShow("error")}>Show error alert</Button>

      <Button onClick={() => onShow("success")}>Show success alert</Button>

      <Button onClick={() => onShow("warning")}>Show warning alert</Button>

      <Button onClick={() => onShow("info")}>Show info alert</Button>

      <Alert
        onClose={onClose}
        show={state.show}
        type={state.type as any}
        message="Вы совершили ошибку..."
      />

      <div style={{ height: "150vh" }}></div>
    </>
  );
};

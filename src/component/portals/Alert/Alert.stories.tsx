import { useState } from "react";
import Alert from ".";
import Button from "../../buttons/Button";

export default {
  component: Alert,
  title: "Portals/Alert",
};

export const Default = () => {
  const [state, setState] = useState({
    showWarning: false,
    showError: false,
    showSuccess: false,
    showInfo: false,
  });

  return (
    <>
      <Button onClick={() => setState({ ...state, showError: true })}>
        Show error alert
      </Button>

      <Button onClick={() => setState({ ...state, showSuccess: true })}>
        Show success alert
      </Button>

      <Button onClick={() => setState({ ...state, showWarning: true })}>
        Show warning alert
      </Button>

      <Button onClick={() => setState({ ...state, showInfo: true })}>
        Show info alert
      </Button>

      {state.showWarning && (
        <Alert
          onClose={() => setState({ ...state, showWarning: false })}
          show={true}
          type="warning"
          message="Alert type of - warning"
        />
      )}

      {state.showError && (
        <Alert
          onClose={() => setState({ ...state, showError: false })}
          show={true}
          type="error"
          message="Alert type of - error"
        />
      )}

      {state.showSuccess && (
        <Alert
          onClose={() => setState({ ...state, showSuccess: false })}
          show={true}
          type="success"
          message="Alert type of - success"
        />
      )}

      <div style={{ height: "150vh" }}></div>
    </>
  );
};

/* export const Default = () => {
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
 */

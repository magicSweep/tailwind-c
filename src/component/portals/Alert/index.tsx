import { FC, useEffect, useRef } from "react";
import IconButton from "../../buttons/IconButton";
import CloseIcon from "../../icons/CloseIcon";
import ErrorIcon from "../../icons/ErrorIcon";
import InfoIcon from "../../icons/InfoIcon";
import SuccessIcon from "../../icons/SuccessIcon";
import WarningIcon from "../../icons/WarningIcon";
import Snackbar from "../Snackbar";

type AlertType = "success" | "info" | "warning" | "error";

export interface AlertProps {
  type: AlertType;
  show: boolean;
  onClose: (event: any) => void | undefined;
  message: string;
}

const Alert: FC<AlertProps> = ({ type, show, onClose, message }) => {
  return (
    <Snackbar onClose={onClose} show={show}>
      <div
        className={`
            min-w-72
            flex items-center justify-center
            py-1 px-5
            rounded shadow-lg
            bg-${type}
        `}
      >
        {type === "success" && (
          <SuccessIcon width={28} height={28} className="fill-white" />
        )}

        {type === "warning" && (
          <WarningIcon width={28} height={28} className="fill-white" />
        )}

        {type === "error" && (
          <ErrorIcon width={28} height={28} className="fill-white" />
        )}

        {type === "info" && (
          <InfoIcon width={28} height={28} className="fill-white" />
        )}

        <p
          className={`
            box-border
            text-left
            flex-grow
            px-3
            text-white
            select-none
            `}
        >
          {message}
        </p>

        <IconButton
          color="transparent"
          aria-label="Закрыть алерт"
          disabled={false}
          onClick={onClose}
        >
          <CloseIcon width={20} height={20} className="fill-white" />
        </IconButton>
      </div>
    </Snackbar>
  );
};

export default Alert;

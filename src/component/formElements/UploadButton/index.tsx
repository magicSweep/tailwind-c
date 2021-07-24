import React, {
  FC,
  InputHTMLAttributes,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import HelperText from "./../HelperText";
import Button, { PureButtonProps } from "../../buttons/Button";
import PlusIcon from "../../icons/PlusIcon";

export interface IUploadButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
    PureButtonProps {
  fileList?: FileList;
  error?: boolean;
  helperText?: string;
  label?: string;
}

const UploadButton: FC<IUploadButtonProps> = ({
  id,
  label,
  fileList,
  name,
  error,
  helperText,
  disabled,
  ...props
}) => {
  let fHelperText = helperText;

  if (!error && fileList && fileList.length > 0) {
    if (fileList.length > 1) {
      throw new Error(`Multiple files not implemented`);
    }
    fHelperText = `Вы добавили файл - ${fileList[0].name}`;
  }

  return (
    <div className="flex justify-start items-start flex-col">
      <input
        accept="image/*"
        name={name}
        id={id}
        type="file"
        disabled={disabled}
        className="hidden"
      />

      <Button
        startIcon={
          <PlusIcon
            width={16}
            height={16}
            className={`fill-${
              disabled ? "disabled" : error ? "error" : "primary"
            }`}
          />
        }
        color={error ? "error" : "primary"}
        size="medium"
        variant="text"
        disabled={disabled}
        htmlFor={id}
        as="label"
      >
        {label}
      </Button>

      <HelperText
        className={`
            text-xs tracking-normal
            text-${disabled ? "disabled" : error ? "error" : "success"}
            pl-1
        `}
      >
        {fHelperText}
      </HelperText>
    </div>
  );
};

export default UploadButton;

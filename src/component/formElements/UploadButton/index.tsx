import {
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
  //fileList?: FileList;
  errors?: string[];
  helperText?: string[];
  label?: string;
  onChange?: (event?: any) => void;
}

const UploadButton: FC<IUploadButtonProps> = ({
  id,
  label,
  //fileList,
  name,
  errors,
  helperText,
  disabled,
  onChange,
}) => {
  /* let fHelperText = helperText;

  if (!errors && fileList && fileList.length > 0) {
    if (fileList.length > 1) {
      throw new Error(`Multiple files not implemented`);
    }
    fHelperText = `Вы добавили файл - ${fileList[0].name}`;
  } */

  const isError = errors && errors.length > 0;

  return (
    <div className="flex justify-start items-start flex-col">
      <input
        accept="image/*"
        name={name}
        id={id}
        type="file"
        disabled={disabled}
        className="hidden"
        onChange={onChange}
      />

      <Button
        startIcon={
          <PlusIcon
            width={16}
            height={16}
            className={`fill-${
              disabled ? "disabled" : isError ? "error" : "primary"
            }`}
          />
        }
        color={isError ? "error" : "primary"}
        size="sm"
        variant="outlined"
        disabled={disabled}
        htmlFor={id}
        as="label"
      >
        {label}
      </Button>

      <HelperText
        type={disabled ? "disabled" : isError ? "error" : "success"}
        messages={isError ? errors : helperText}
      />
    </div>
  );
};

export default UploadButton;

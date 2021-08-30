import { FC, HTMLProps } from "react";
import Button from "../../buttons/Button";
import IconButton from "../../buttons/IconButton";
import HeroTitle from "../../HeroTitle";
import CloseIcon from "../../icons/CloseIcon";

export interface FormWrapperProps extends HTMLProps<HTMLFormElement> {
  title: string;
  submitBtnTitle: string;
  disabled: boolean;
  onClose: () => void;
  onSubmit: (...args: any) => void;
  children: any;
}

const FormWrapper: FC<FormWrapperProps> = ({
  title,
  onSubmit,
  onClose,
  submitBtnTitle,
  disabled,
  children,
  ...props
}) => {
  return (
    <form
      className={`
            relative 
            w-600
            pt-18 pb-2 px-4 
            mt-8 mx-auto mb-0 
            rounded shadow 
            bg-paper
        `}
      {...props}
      onSubmit={onSubmit}
      onClick={(event: any) => event.stopPropagation()}
    >
      <HeroTitle
        tailwindTop="-top-6"
        tailwindBgColor="bg-primary"
        tailwindShadow="shadow"
        tailwindWidth="w-3/4"
      >
        <div className="flex justify-between items-center text-white w-full">
          <h3 className="flex-grow text-center">{title}</h3>
          <IconButton
            type="button"
            onClick={(event: any) => {
              event.stopPropagation();
              onClose();
            }}
            color="transparent"
          >
            <CloseIcon width={20} height={20} className="fill-white" />
          </IconButton>
        </div>
      </HeroTitle>

      {children}

      <div className="text-center mb-6">
        <Button
          color="primary"
          variant="contained"
          size="sm"
          disabled={disabled}
          type="submit"
        >
          {submitBtnTitle}
        </Button>
      </div>
    </form>
  );
};

export default FormWrapper;

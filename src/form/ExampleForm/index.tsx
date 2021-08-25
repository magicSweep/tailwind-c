import { FC } from "react";
import BaseField from "../../component/formElements/BaseField";
import Textarea from "../../component/formElements/Textarea";
import UploadButton from "../../component/formElements/UploadButton";
import ProgressIndicator from "../../component/progress/ProgressIndicator";
import FormWrapper from "../../component/formElements/FormWrapper";

export interface AddEditPhotoFormWidgetProps {
  title: string;
  onSubmit: (...args: any) => void;
  onClose: () => void;
  onChange: (event: any) => void;
  uploadLoading?: boolean;
  photoSrc?: string;
  formErrors: any;
  formState: any;
  //defaultTagsIds?: string[];
  //uploadPhotoFormData: IUseUploadPhotoFormReturn;
}

const ElementWrapper = ({ children, index, className }: any) => (
  <div
    className={`
    w-full ${className ? className : index === 1 ? "mb-0 text-center" : "mb-2"}
  `}
  >
    {children}
  </div>
);

const ExampleForm: FC<AddEditPhotoFormWidgetProps> = ({
  title,
  onSubmit,
  onClose,
  onChange,
  uploadLoading,
  photoSrc,
  formErrors,
  formState,
}) => {
  const uploadBtnSuccessMsg =
    formState.photoFile && formState.photoFile.length > 0
      ? [`Вы добавили файл - ${formState.photoFile[0].name}`]
      : [];

  return (
    <FormWrapper
      title={title}
      onSubmit={onSubmit}
      onClose={onClose}
      submitBtnTitle="Отправить"
      disabled={uploadLoading === true}
    >
      <div className="pt-20 px-4">
        {photoSrc !== undefined && (
          <div className="flex justify-center mb-8">
            <img className="h-14 w-auto rounded" src={photoSrc} />
          </div>
        )}

        <ElementWrapper index={1}>
          <UploadButton
            id="upload_photo_1234"
            //name="photoFile"
            label="Добавить фото"
            errors={formErrors.photoFile}
            helperText={uploadBtnSuccessMsg}
            disabled={uploadLoading === true}
            name={"photoFile"}
            onChange={onChange}
          />
        </ElementWrapper>

        <ElementWrapper className="mb-4">
          <BaseField
            id="date_id123"
            type="date"
            label="Когда сделан снимок(примерно):"
            name="date"
            value={formState.date}
            errors={formErrors.date}
            disabled={uploadLoading === true}
            onChange={onChange}
          />
        </ElementWrapper>

        <ElementWrapper className="mb-4">
          <BaseField
            id="date_id123"
            type="password"
            label="Ваш пароль:"
            name="password"
            placeholder="************"
            value={formState.password}
            errors={formErrors.password}
            disabled={uploadLoading === true}
            onChange={onChange}
          />
        </ElementWrapper>

        <ElementWrapper>
          <Textarea
            id="desc_id123"
            label="Необязательный комментарий:"
            name="desc"
            value={formState.desc}
            errors={formErrors.desc}
            disabled={uploadLoading === true}
            onChange={onChange}
          />
        </ElementWrapper>

        {uploadLoading && (
          <div className="mb-2">
            <ProgressIndicator />
          </div>
        )}
      </div>
    </FormWrapper>
  );
};

export default ExampleForm;

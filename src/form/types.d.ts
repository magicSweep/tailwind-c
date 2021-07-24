type FieldInfo = { name: string; value: any };

type PhotoFormData = {
  date?: string;
  description?: string;
  //tags?: { [key: string]: boolean };
  //photoFile?: FileList;
};

interface IFormModel<TFormData> {
  validate: (name: any, value: any) => string | string[];
  getFormFields: () => FieldInfo[];
  setValuesFromState: (formState: TFormData) => void;
}

interface IUseFormController<TFormData> {
  setFormErrors?: Dispatch<
    SetStateAction<{ [name: string]: string | string[] }>
  >;
  setFormState?: Dispatch<SetStateAction<TFormData>>;

  formModel: IPhotoFormModel<TFormData>;
  onChange: (event: any) => void;
  getFormFields: () => FieldInfo[];
}

type FormType = "add_photo" | "edit_photo" | "search_photo";

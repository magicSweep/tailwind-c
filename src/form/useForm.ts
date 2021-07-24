import {
  useState,
  useRef,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import { unstable_batchedUpdates } from "react-dom";

/* type FieldInfo = { name: string; value: any };

type PhotoFormData = {
  date?: Date;
  description?: string;
  tags?: { [key: string]: boolean };
  photoFile?: FileList;
};

interface IFormModel<TFormData> {
  validate: (name: string) => string | string[];
  getFormFields: () => FieldInfo[];
  setValuesFromState: (formState: TFormData) => void;
} */

/* interface IUseFormController<TFormData> {
  setFormErrors: Dispatch<{ [name: string]: string | string[] }>;
  setFormState: Dispatch<TFormData>;

  formModel: IFormModel<TFormData>;
  onChange: (event: any) => void;
  getFormFields: () => FieldInfo[];
} */

// TFormModel, TFormData
export abstract class AUseFormController<TFormData>
  implements IUseFormController<TFormData> {
  setFormErrors?: Dispatch<
    SetStateAction<{ [name: string]: string | string[] }>
  >;
  setFormState?: Dispatch<SetStateAction<TFormData>>;

  formModel: IFormModel<TFormData>;

  constructor(formModel: IFormModel<TFormData>) {
    this.formModel = formModel;
    this.onChange = this.onChange.bind(this);
  }

  getFormFields = () => this.formModel.getFormFields();

  abstract onChange(event: any): void;

  /* onChange = (event: any) => {
    const target = event.currentTarget();
    const name = target.name;

    const error = this.formModel.validate(name);

    unstable_batchedUpdates(() => {

      if(!this.setFormErrors || !this.setFormState) throw new Error("No setFormErrors or setFormState");

      this.setFormErrors((prevState) => {
        const newState = { ...prevState };
        newState[name] = error;

        return newState;
      });

      this.setFormState((prevState) => {
        const newState = { ...prevState };
        newState[name] = target.value;

        return newState as TFormData;
      });
    });
  }; */
}

/* class UsePhototFormController extends AUseFormController<PhotoFormData> {
  onChange = (event: any) => {
    const target = event.currentTarget();
    const name: keyof PhotoFormData = target.name;

    const error = this.formModel.validate(name);

    unstable_batchedUpdates(() => {
      if (!this.setFormErrors || !this.setFormState)
        throw new Error("No setFormErrors or setFormState");

      this.setFormErrors((prevState: { [name: string]: string | string[] }) => {
        const newState = { ...prevState };

        newState[name] = error;

        return newState;
      });

      this.setFormState((prevState: PhotoFormData) => {
        const newState: PhotoFormData = { ...prevState };

        if (!(name in newState))
          throw new Error(`Bad form field name... | ${name}`);

        newState[name] = target.value;

        return newState;
      });
    });
  };
} */

//type FormType = "add_photo" | "edit_photo" | "search_photo";

export const useForm = <TFormData>(
  type: FormType,
  makeControllerFabric: (type: FormType) => IUseFormController<TFormData>
) => {
  const controllerRef: MutableRefObject<
    IUseFormController<TFormData> | undefined
  > = useRef();

  const [formState, setFormState] = useState(() => {
    controllerRef.current = makeControllerFabric(type);

    //controllerRef.current = new useFormController(new PhotoFormModel());

    const formFields = controllerRef.current.getFormFields();

    const state: any = {};
    formFields.forEach((field, i) => {
      state[field.name] = field.value;
    });

    return state;
  });

  if (controllerRef.current === undefined)
    throw new Error("No use form controller");

  const [formErrors, setFormErrors] = useState(() => {
    if (controllerRef.current === undefined)
      throw new Error("No use form controller");

    const formFields = controllerRef.current.getFormFields();

    const state: any = {};
    formFields.forEach((field, i) => {
      state[field.name] = "";
    });

    return state;
  });

  const handleSubmit = (
    submitCallback: (formModel: IFormModel<TFormData>) => void
  ) => {
    return () => {
      if (controllerRef.current === undefined)
        throw new Error("No use form controller");

      const formModel = controllerRef.current.formModel;

      formModel.setValuesFromState(formState);

      submitCallback(formModel);
    };
  };

  controllerRef.current.setFormState = setFormState;
  controllerRef.current.setFormErrors = setFormErrors;

  return {
    formState,
    formErrors,
    handleSubmit,
    onChange: controllerRef.current.onChange,
  };
};

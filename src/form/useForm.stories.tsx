import Button from "../component/buttons/Button";
import { AUseFormController, useForm } from "./useForm";
import { unstable_batchedUpdates } from "react-dom";

class PhotoFormModel implements IFormModel<PhotoFormData> {
  private date?: string;
  private description?: string;
  //private tags?: { [key: string]: boolean };
  //private photoFile?: FileList;

  formType: "add" | "edit";

  constructor(formType: "add" | "edit") {
    this.formType = formType;
  }

  /* makeDataToAddPhotoRequest() {}
  
    makeDataToEditPhotoRequest() {} */

  validate = (name: keyof PhotoFormData, value: any) => {
    switch (name) {
      case "date":
        return this.dateValidation(value);
      case "description":
        return this.descriptionValidation(value);

      default:
        throw new Error(`No implementation for key | ${name}`);
    }
  };

  setValuesFromState = (formState: PhotoFormData) => {
    this.date = formState.date;
    this.description = formState.description;
    //this.tags = formState.tags;
    //this.photoFile = formState.photoFile;
  };

  dateValidation(date: string) {
    const d = new Date(date);

    if (d.toString() === "Invalid Date") return "Неверный формат даты";

    if (d.getMilliseconds() > Date.now()) return "Фотка сделана в будущем";

    return "";
  }

  descriptionValidation(value: string) {
    if (typeof value !== "string") return "Нам нужна строка...";

    if (value.length > 10) return "Слишком длинное описание";

    return "";
  }
  tagsValidation() {}
  photoFileValidation() {}

  // Generate form fields with default values
  getFormFields() {
    return [
      { name: "date", value: "" },
      { name: "description", value: "" },
    ];
  }
}

class UsePhototFormController extends AUseFormController<PhotoFormData> {
  onChange(event: any) {
    const target = event.currentTarget;
    const name: keyof PhotoFormData = target.name;

    const value = target.value;

    const error = this.formModel.validate(name, value);

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

        newState[name] = value;

        return newState;
      });
    });
  }
}

function makeControllerFabric<TFormData>(
  type: FormType
): IUseFormController<TFormData> {
  switch (type) {
    case "add_photo":
      return new UsePhototFormController(new PhotoFormModel("add"));

    default:
      throw new Error(`No implementation for form type | ${type}`);
  }
}

export default {
  component: Button,
  title: "Examples/useForm",
};

export const Default = () => {
  const {
    formState,
    formErrors,
    onChange,
    handleSubmit,
  } = useForm<PhotoFormData>("add_photo", makeControllerFabric);

  const submit = (formModel: IFormModel<PhotoFormData>) => {
    console.log("SUBMIT", formModel);
  };

  console.log("RENDER FORM", formState, formErrors);

  return (
    <form
      className="m-auto w-96 p-6 flex flex-col align-center space-y-4"
      onSubmit={handleSubmit(submit)}
    >
      <div className="flex">
        <label htmlFor="date-id">Date:</label>
        <input
          id="date-id"
          name="date"
          type="date"
          value={formState["date"]}
          onChange={onChange}
        />
      </div>

      <div className="flex">
        <label htmlFor="desc-id">Description:</label>
        <input
          id="desc-id"
          name="description"
          type="text"
          value={formState["description"]}
          onChange={onChange}
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
};

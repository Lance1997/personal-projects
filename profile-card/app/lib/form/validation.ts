import { string } from "yup";

type Input = {
  type:
    | "username"
    | "nickname"
    | "website"
    | "twitter"
    | "facebook"
    | "email"
    | "textColor"
    | "backgroundColor"
    | "aboutMe";
  value: FormDataEntryValue | null;
};

export const validateCardField = async ({ type, value }: Input) => {
  let validationMessage = "";
  switch (type) {
    case "username":
      validationMessage = await string()
        .required()
        .min(5)
        .max(50)
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "nickname":
      validationMessage = await string()
        .nullable()
        .min(5)
        .max(50)
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "email":
      validationMessage = await string()
        .email()
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "website":
      validationMessage = await string()
        .url()
        .max(100)
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "twitter":
      validationMessage = await string()
        .max(20)
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "facebook":
      validationMessage = await string()
        .max(30)
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "backgroundColor":
      validationMessage = await string()
        .max(7)
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "textColor":
      validationMessage = await string()
        .max(7)
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;
    case "aboutMe":
      validationMessage = await string()
        .min(10)
        .max(100)
        .nullable()
        .validate(value)
        .then(() => "")
        .catch((error) => error.message);
      break;

    default:
      // Field is probably not found
      validationMessage = "validation failed";
      break;
  }

  return validationMessage;
};

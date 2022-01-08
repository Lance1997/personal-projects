type Props = {
  label: string;
  type:
    | "email"
    | "date"
    | "text"
    | "number"
    | "checkbox"
    | "radio"
    | "image"
    | "url"
    | "color"
    | "submit";
  name: string;
  placeholder?: string;
  error: string | Promise<string> | undefined;
  value: string | undefined;
  updateCardPreview?: (type: string, value: string) => void;
};

const FormInput = (props: Props) => {
  const inputId = props.label.toLowerCase();

  return (
    <div className="my-3 space-y-2">
      <label htmlFor={inputId}>
        {props.label}

        {props.error ? (
          <span
            className="ml-3 text-sm text-white"
            role="alert"
            id={inputId + "-error"}
          >
            * {props.error}
          </span>
        ) : null}
      </label>
      {props.updateCardPreview ? (
        <input
          placeholder={props.placeholder || ""}
          type={props.type}
          id={inputId}
          name={props.name}
          autoComplete="none"
          className="block w-full h-10 px-2 text-gray-700 border-2 border-gray-200 shadow outline-none focus:shadow-xl focus:border-gray-500 shadow-pink-700 placeholder:text-gray-400"
          defaultValue={props.value}
          aria-invalid={Boolean(props.error)}
          aria-describedby={props.error ? inputId + "-error" : undefined}
          onChange={(event) =>
            //@ts-ignore
            props.updateCardPreview(props.name, event.target.value)
          }
        />
      ) : (
        <input
          placeholder={props.placeholder || ""}
          type={props.type}
          id={inputId}
          name={props.name}
          autoComplete="none"
          className="block w-full h-10 px-2 text-gray-700 border-2 border-gray-200 shadow outline-none focus:shadow-xl focus:border-gray-500 shadow-pink-700 placeholder:text-gray-400"
          defaultValue={props.value}
          aria-invalid={Boolean(props.error)}
          aria-describedby={props.error ? inputId + "-error" : undefined}
        />
      )}
    </div>
  );
};

export default FormInput;

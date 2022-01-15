type Props = {
  label: string;
  name: string;
  placeholder?: string;
  error: string | Promise<string> | undefined;
  value: string | undefined;
  updateCardPreview?: (type: string, value: string) => void;
  rows?: number;
  cols?: number;
};

const FormTextArea = (props: Props) => {
  const classes =
    "block px-2 w-full text-gray-700 border-2 border-gray-200 shadow transition ease-in-out outline-none focus:shadow-xl focus:border-gray-500 shadow-pink-700 placeholder:text-gray-400";
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
        <textarea
          placeholder={props.placeholder || ""}
          rows={props.rows || 3}
          spellCheck={true}
          maxLength={100}
          id={inputId}
          name={props.name}
          autoComplete="none"
          className={classes}
          defaultValue={props.value}
          aria-invalid={Boolean(props.error)}
          aria-describedby={props.error ? inputId + "-error" : undefined}
          onChange={(event) =>
            //@ts-ignore
            props.updateCardPreview(props.name, event.target.value)
          }
        />
      ) : (
        <textarea
          placeholder={props.placeholder || ""}
          rows={props.rows || 3}
          spellCheck={true}
          maxLength={100}
          id={inputId}
          name={props.name}
          autoComplete="none"
          className={classes}
          defaultValue={props.value}
          aria-invalid={Boolean(props.error)}
          aria-describedby={props.error ? inputId + "-error" : undefined}
        />
      )}
    </div>
  );
};

export default FormTextArea;

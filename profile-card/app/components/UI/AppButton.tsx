type Props = {
  title: string | JSX.Element;
  color: "primary" | "secondary" | "tertiary";
  rounded?: boolean;
  type?: "submit" | "reset" | "button";
  action?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>;
  classes?: string;
  size?: "small" | "default" | "large";
};

const AppButton = (props: Props) => {
  const buttonSize = props.size || "default";
  let computedClasses = `${
    props.classes || ""
  } cursor-pointer font-medium text-lg border-2`;

  if (props.color === "primary") {
    computedClasses +=
      " hover:text-rose-600 hover:bg-none hover:border-pink-600 border-gray-200 text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-md shadow-rose-600/40";
  } else if (props.color === "secondary") {
    computedClasses +=
      " hover:text-pink-600 hover:bg-none hover:border-rose-600 border-gray-200 text-white bg-gradient-to-r from-rose-600 to-pink-600 shadow-md shadow-pink-600/40";
  } else if (props.color === "tertiary") {
    computedClasses +=
      " hover:text-gray-600 hover:bg-none hover:border-gray-600 border-gray-200 text-white bg-gradient-to-r from-gray-400 to-gray-800 shadow-md shadow-gray-600/40";
  }

  if (buttonSize === "default") {
    computedClasses += " px-6 py-3";
  } else if (buttonSize === "small") {
    computedClasses += " px-3 py-1";
  } else if (buttonSize === "large") {
    computedClasses += " px-8 py-4";
  }

  if (props.action) {
    return (
      <button
        type={props.type || "button"}
        onClick={props.action}
        className={computedClasses}
      >
        {props.title}
      </button>
    );
  }
  return (
    <button type={props.type || "button"} className={computedClasses}>
      {props.title}
    </button>
  );
};

export default AppButton;

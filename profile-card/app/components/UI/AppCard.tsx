import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiOutlineLink,
  AiTwotoneMail,
  AiOutlineUserSwitch,
} from "react-icons/ai";

type Props = {
  textColor: string;
  backgroundColor: string;
  username: string;
  nickname?: string;
  email?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
  aboutMe?: string;
  classes?: string;
};

const AppCard = (props: Props) => {
  let website = "w";
  try {
    website = new URL(props.website || "").hostname;
  } catch (error) {
    website = "website";
  }

  const style = {
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  return (
    <div
      className={`p-3 w-full border-2 border-gray-200 ${
        props.classes ? props.classes : ""
      }`}
      style={style}
    >
      <div className="flex flex-row gap-x-4 justify-between">
        <h3 style={{ color: props.textColor }}>{props.username}</h3>
        {(props.facebook || props.twitter) && (
          <div className="flex gap-x-4">
            {props.twitter && (
              <a
                href={`https://twitter.com/${props.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterSquare
                  size="32"
                  className="transition cursor-pointer hover:shadow-xl"
                />{" "}
              </a>
            )}
            {props.facebook && (
              <a
                href={`https://web.facebook.com/${props.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook
                  size="32"
                  className="transition cursor-pointer hover:shadow-xl"
                />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="mt-4">
        {(props.nickname || props.email) && (
          <div className="space-y-2">
            {props.nickname && (
              <p className="flex gap-x-2 items-center font-mono font-semibold text-md">
                <AiOutlineUserSwitch /> <span>({props.nickname})</span>
              </p>
            )}
            {props.email && (
              <p className="flex gap-x-2 items-center text-md">
                <AiTwotoneMail />{" "}
                <a
                  href={`mailto:${props.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.email}
                </a>{" "}
              </p>
            )}
          </div>
        )}

        {props.website && (
          <div className="mt-2">
            <p className="flex gap-x-2 items-center font-medium text-md">
              <AiOutlineLink className="" />
              <a
                href={props.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {website}
              </a>{" "}
            </p>
          </div>
        )}
        {props.aboutMe && (
          <div className="mt-4 font-bold">
            <p>{props.aboutMe}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCard;

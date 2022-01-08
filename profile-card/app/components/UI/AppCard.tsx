import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiOutlineLink,
  AiTwotoneMail,
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
};

const AppCard = (props: Props) => {
  let website = "w";
  try {
    website = new URL(props.website || "").hostname;
  } catch (error) {
    website = "website";
  }

  console.log("re-render", props.backgroundColor);
  const style = {
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  return (
    <div className={`border-2 border-gray-200 p-3`} style={style}>
      <div className="flex gap-x-4 flex-row justify-between">
        <h3 className="text-white">{props.username}</h3>
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
                  className="cursor-pointer hover:shadow-xl transition"
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
                  className="cursor-pointer hover:shadow-xl transition"
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
              <p className="text-md font-semibold font-mono">
                Nickname: ({props.nickname})
              </p>
            )}
            {props.email && (
              <p className="text-md flex gap-x-2 items-center">
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
            <p className="text-md font-medium flex gap-x-2 items-center">
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
      </div>
    </div>
  );
};

export default AppCard;

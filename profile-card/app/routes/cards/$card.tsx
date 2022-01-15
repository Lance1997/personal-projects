import { useLoaderData, useCatch, useParams, Link } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import AppCard from "~/components/UI/AppCard";
import AppButton from "~/components/UI/AppButton";
import { GeneratedCard } from "../cards/index";
import { getCards } from "~/lib/card";
import {
  AiFillTwitterSquare,
  AiOutlineFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

interface LoaderData {
  card: GeneratedCard & { id: string; url: string };
}

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined;
}) => {
  if (!data) {
    return {
      title: "No Card",
      description: "No card found",
      "twitter:title": "No Card",
      "twitter:description": "No card found",
      "twitter:image": "",
      "twitter:image:alt": "",
      "twitter:card": "summary",
      "twitter:creator": "",
      "twitter:site": "",
    };
  }
  const [title, description] = [
    data.card.username + " Card - Profile Card Generator",
    "View Generated Card For " + data.card.username,
  ];
  return {
    title: title,
    description: description,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image":
      "https://profilegen.discoverlance.com/android-chrome-512x512.png",
    "twitter:image:alt": `${data.card.username} Profile Card Image`,
    "twitter:card": "summary",
    "twitter:creator": "@" + data.card.twitter,
    "twitter:site": "@ArmahLance",
  };
};

export let loader: LoaderFunction = async ({ params, request }) => {
  const loadedCards = await getCards();

  if (!loadedCards) {
    throw new Response("Error loading card. Please try again later.", {
      status: 500,
    });
  }

  //get keys
  const cardKeys = Object.keys(loadedCards);

  if (cardKeys.includes(params.card!)) {
    const card = loadedCards[params.card!];
    card.id = params.card;
    card.url = request.url;
    return { card: card };
  } else {
    throw new Response(
      "Card " +
        params.card +
        " does not exist, please check you have the correct link and retry.",
      { status: 404 }
    );
  }
};

const CardViewPage = () => {
  const copyToClipBoard = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => {
    const target = event.currentTarget;
    navigator.clipboard.writeText(text);
    target.textContent = "Copied";
    setTimeout(() => {
      target.textContent = "Copy Profile URL";
    }, 2500);
  };
  let cardData = useLoaderData<LoaderData>();
  return (
    <div className="px-2 mx-auto w-full max-w-xl h-screen">
      <section className="space-y-8">
        <Link to="/" prefetch="render">
          <h1 className="cursor-pointer hover:text-pink-700">Profile Card</h1>
        </Link>

        <div className="flex justify-end space-x-4">
          <AppButton
            title="Edit Card"
            type="button"
            color="tertiary"
            size="small"
            classes="hover:text-black"
            action={() => alert("Editing not added yet")}
          />
          <AppButton
            title="Copy Profile URL"
            type="button"
            color="secondary"
            size="small"
            action={(event) => copyToClipBoard(event, cardData.card.url)}
          />
        </div>

        <section className="w-full">
          <AppCard
            textColor={cardData.card.textColor}
            backgroundColor={cardData.card.backgroundColor}
            username={cardData.card.username}
            nickname={cardData.card.nickname}
            email={cardData.card.email}
            website={cardData.card.website}
            twitter={cardData.card.twitter}
            facebook={cardData.card.facebook}
            aboutMe={cardData.card.aboutMe}
            classes="shadow-md"
          />
        </section>
        {/* Social media share links */}
        <section className="flex gap-x-4 justify-end">
          <p>Share: </p>
          <p>
            <a
              href={`https://twitter.com/intent/tweet?text=See%20my%20awesome%20generated%20profile%20card. ${cardData.card.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterSquare
                size="32"
                className="transition cursor-pointer hover:shadow-xl"
                style={{
                  backgroundColor: cardData.card.backgroundColor,
                  color: cardData.card.textColor,
                }}
              />
            </a>
          </p>
          <p>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${cardData.card.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook
                size="32"
                className="transition cursor-pointer hover:shadow-xl"
                style={{
                  backgroundColor: cardData.card.backgroundColor,
                  color: cardData.card.textColor,
                }}
              />
            </a>
          </p>

          <p>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${cardData.card.url}&title=My%20Profile%20Card&summary=See%20my%20awesome%20profile%20card.&source=https://profilegen.discoverlance.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size="32"
                className="transition cursor-pointer hover:shadow-xl"
                style={{
                  backgroundColor: cardData.card.backgroundColor,
                  color: cardData.card.textColor,
                }}
              />
            </a>
          </p>
        </section>
      </section>
    </div>
  );
};

export default CardViewPage;

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div className="grid place-items-center px-4 mx-auto max-w-2xl h-screen">
        <section className="space-y-5">
          <h1>404 - {caught.statusText}</h1>
          <h2>{caught.data}</h2>
        </section>
      </div>
    );
  }
  throw new Error(caught.data);
}

//@ts-ignore
export function ErrorBoundary({ error }) {
  const { card } = useParams();
  return (
    <div className="grid place-items-center px-4 mx-auto max-w-2xl h-screen">
      <section className="space-y-5">
        <h1>Error Loading Card {card}</h1>
        <h2 className="pl-5">{error.message}</h2>
      </section>
    </div>
  );
}

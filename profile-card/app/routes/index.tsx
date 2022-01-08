import { Link, MetaFunction, useSearchParams } from "remix";
import ThePrimaryLayout from "~/components/layouts/ThePrimaryLayout";
import AppButton from "~/components/UI/AppButton";

export const meta: MetaFunction = () => {
  return {
    title: "Home - Profile Card Generator",
  };
};

export default function Index() {
  const [searchParams] = useSearchParams();

  let SearchCardText = <p></p>;

  if (searchParams.get("url")) {
    SearchCardText = (
      <div className="py-4 my-4 text-xl font-bold text-white bg-pink-600 border-2 border-gray-200 shadow-xl shadow-pink-600/20">
        Card Successfully saved{" "}
        <Link to={`/cards/${searchParams.get("url")}`}>
          <AppButton
            title="View Card"
            type="button"
            size="small"
            color="tertiary"
            classes="ml-3 hover:text-white hover:border-white"
          />
        </Link>{" "}
      </div>
    );
  }
  return (
    <ThePrimaryLayout>
      <div className="grid place-items-center h-full text-center">
        <section>
          <header className="space-y-4">
            {SearchCardText}
            <h1 className="">Profile Card Generator</h1>
            <h2 className="">Generate and display a brightened profile!</h2>
            <h3>
              Share your generated profile card on social media, save as pdf or
              an image.
            </h3>
          </header>
          {/* Create card */}
          <Link to="/cards" prefetch="render">
            <AppButton title="Generate Card" color="primary" classes="mt-12" />
          </Link>
        </section>
      </div>
    </ThePrimaryLayout>
  );
}

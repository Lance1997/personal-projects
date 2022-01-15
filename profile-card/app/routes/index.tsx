import { Link, MetaFunction } from "remix";
import ThePrimaryLayout from "~/components/layouts/ThePrimaryLayout";
import AppButton from "~/components/UI/AppButton";

export const meta: MetaFunction = () => {
  return {
    title: "Home - Profile Card Generator",
  };
};

export default function Index() {
  return (
    <ThePrimaryLayout>
      <div className="grid place-items-center px-2 h-full text-center">
        <section>
          <header className="space-y-4">
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

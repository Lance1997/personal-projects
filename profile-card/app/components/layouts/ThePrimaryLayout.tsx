import ThePrimaryNavbar from "./navigation/ThePrimaryNavbar";

type Props = {
  children: JSX.Element;
};

const ThePrimaryLayout = (props: Props) => {
  return (
    <section className="relative min-h-screen">
      {/* <header className="absolute top-1/2 left-2">
        <ThePrimaryNavbar />
      </header> */}

      <main className="h-screen">{props.children}</main>
    </section>
  );
};

export default ThePrimaryLayout;

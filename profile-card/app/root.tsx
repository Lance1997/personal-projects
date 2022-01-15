import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useParams,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => {
  const [title, description] = [
    "Profile Card Generator",
    "Generate and display a brightened profile!",
  ];
  return {
    title: title,
    "twitter:image":
      "https://profilegen.discoverlance.com/android-chrome-512x512.png",
    "twitter:image:alt": `${title} Logo`,
    "twitter:card": "summary",
    "twitter:creator": "@ArmahLance",
    "twitter:site": "@ArmahLance",
    "twitter:title": title,
    "twitter:description": description,
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ];
};

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

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
  return (
    <div className="grid place-items-center px-4 mx-auto max-w-2xl h-screen">
      <section className="space-y-5">
        <h1>App Error</h1>
        <h2 className="pl-5">{error.message}</h2>
      </section>
    </div>
  );
}

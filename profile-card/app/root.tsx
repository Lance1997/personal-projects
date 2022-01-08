import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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
    "twitter:image": "https://profilecardgen.discoverlance.com/logo.png",
    "twitter:image:alt": `${title} Logo`,
    "twitter:card": "summary",
    "twitter:creator": "@ArmahLance",
    "twitter:site": "@ArmahLance",
    "twitter:title": title,
    "twitter:description": description,
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
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
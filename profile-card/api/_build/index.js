var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/workspace/personal-projects/profile-card/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VDEBVJE7.css";

// route-module:/workspace/personal-projects/profile-card/app/root.tsx
var meta = () => {
  const [title, description] = [
    "Profile Card Generator",
    "Generate and display a brightened profile!"
  ];
  return {
    title,
    "twitter:image": "https://profilecardgen.discoverlance.com/logo.png",
    "twitter:image:alt": `${title} Logo`,
    "twitter:card": "summary",
    "twitter:creator": "@ArmahLance",
    "twitter:site": "@ArmahLance",
    "twitter:title": title,
    "twitter:description": description
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "scroll-smooth"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "antialiased"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/workspace/personal-projects/profile-card/app/routes/cards.tsx
var cards_exports = {};
__export(cards_exports, {
  default: () => cards_default
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/layouts/ThePrimaryLayout.tsx
init_react();
var ThePrimaryLayout = (props) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "relative min-h-screen"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "h-screen"
  }, props.children));
};
var ThePrimaryLayout_default = ThePrimaryLayout;

// route-module:/workspace/personal-projects/profile-card/app/routes/cards.tsx
var CardsPage = () => {
  return /* @__PURE__ */ React.createElement(ThePrimaryLayout_default, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null));
};
var cards_default = CardsPage;

// route-module:/workspace/personal-projects/profile-card/app/routes/cards/$card.tsx
var card_exports = {};
__export(card_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => card_default,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/components/UI/AppCard.tsx
init_react();
var import_ai = __toModule(require("react-icons/ai"));
var AppCard = (props) => {
  let website = "w";
  try {
    website = new URL(props.website || "").hostname;
  } catch (error) {
    website = "website";
  }
  const style = {
    backgroundColor: props.backgroundColor,
    color: props.textColor
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `p-3 w-full border-2 border-gray-200 ${props.classes ? props.classes : ""}`,
    style
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row gap-x-4 justify-between"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-white"
  }, props.username), (props.facebook || props.twitter) && /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-x-4"
  }, props.twitter && /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/${props.twitter}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai.AiFillTwitterSquare, {
    size: "32",
    className: "transition cursor-pointer hover:shadow-xl"
  }), " "), props.facebook && /* @__PURE__ */ React.createElement("a", {
    href: `https://web.facebook.com/${props.facebook}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai.AiFillFacebook, {
    size: "32",
    className: "transition cursor-pointer hover:shadow-xl"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, (props.nickname || props.email) && /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2"
  }, props.nickname && /* @__PURE__ */ React.createElement("p", {
    className: "font-mono font-semibold text-md"
  }, "Nickname: (", props.nickname, ")"), props.email && /* @__PURE__ */ React.createElement("p", {
    className: "flex gap-x-2 items-center text-md"
  }, /* @__PURE__ */ React.createElement(import_ai.AiTwotoneMail, null), " ", /* @__PURE__ */ React.createElement("a", {
    href: `mailto:${props.email}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.email), " ")), props.website && /* @__PURE__ */ React.createElement("div", {
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex gap-x-2 items-center font-medium text-md"
  }, /* @__PURE__ */ React.createElement(import_ai.AiOutlineLink, {
    className: ""
  }), /* @__PURE__ */ React.createElement("a", {
    href: props.website,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underline"
  }, website), " "))));
};
var AppCard_default = AppCard;

// app/components/UI/AppButton.tsx
init_react();
var AppButton = (props) => {
  const buttonSize = props.size || "default";
  let computedClasses = `${props.classes || ""} cursor-pointer font-medium text-lg border-2`;
  if (props.color === "primary") {
    computedClasses += " hover:text-rose-600 hover:bg-none hover:border-pink-600 border-gray-200 text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-md shadow-rose-600/40";
  } else if (props.color === "secondary") {
    computedClasses += " hover:text-pink-600 hover:bg-none hover:border-rose-600 border-gray-200 text-white bg-gradient-to-r from-rose-600 to-pink-600 shadow-md shadow-pink-600/40";
  } else if (props.color === "tertiary") {
    computedClasses += " hover:text-gray-600 hover:bg-none hover:border-gray-600 border-gray-200 text-white bg-gradient-to-r from-gray-400 to-gray-800 shadow-md shadow-gray-600/40";
  }
  if (buttonSize === "default") {
    computedClasses += " px-6 py-3";
  } else if (buttonSize === "small") {
    computedClasses += " px-3 py-1";
  } else if (buttonSize === "large") {
    computedClasses += " px-8 py-4";
  }
  if (props.action) {
    return /* @__PURE__ */ React.createElement("button", {
      type: props.type || "button",
      onClick: props.action,
      className: computedClasses
    }, props.title);
  }
  return /* @__PURE__ */ React.createElement("button", {
    type: props.type || "button",
    className: computedClasses
  }, props.title);
};
var AppButton_default = AppButton;

// app/lib/card.ts
init_react();
var saveCard = async (data) => {
  const response = await fetch("https://personal-firebase-projects-default-rtdb.europe-west1.firebasedatabase.app/cards.json", {
    method: "POST",
    body: JSON.stringify(data)
  }).then((data2) => data2.json()).catch((error) => error.message);
  return response;
};
var getCards = async () => {
  const response = await fetch("https://personal-firebase-projects-default-rtdb.europe-west1.firebasedatabase.app/cards.json").then((res) => res.json()).then((data) => {
    return data;
  }).catch((error) => {
    return error.message;
  });
  return response;
};

// route-module:/workspace/personal-projects/profile-card/app/routes/cards/$card.tsx
var import_ai2 = __toModule(require("react-icons/ai"));
var meta2 = ({
  data
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
      "twitter:site": ""
    };
  }
  const [title, description] = [
    data.card.username + " Card - Profile Card Generator",
    "View Generated Card For " + data.card.username
  ];
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": "https://profilecardgen.discoverlance.com/logo.png",
    "twitter:image:alt": `${data.card.username} Profile Card Image`,
    "twitter:card": "summary",
    "twitter:creator": "@" + data.card.twitter,
    "twitter:site": "@ArmahLance"
  };
};
var loader = async ({ params, request }) => {
  const loadedCards = await getCards();
  if (!loadedCards) {
    throw new Response("Error loading card. Please try again later.", {
      status: 500
    });
  }
  const cardKeys = Object.keys(loadedCards);
  if (cardKeys.includes(params.card)) {
    const card = loadedCards[params.card];
    card.id = params.card;
    card.url = request.url;
    return { card };
  } else {
    throw new Response("Card " + params.card + " does not exist, please check you have the correct link and retry.", { status: 404 });
  }
};
var CardViewPage = () => {
  let cardData = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto w-full max-w-xl h-screen"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "space-y-8"
  }, /* @__PURE__ */ React.createElement("h1", null, "Profile Card"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end"
  }, /* @__PURE__ */ React.createElement(AppButton_default, {
    title: "Edit Card",
    type: "button",
    color: "tertiary",
    size: "small",
    action: () => alert("Editing not added yet")
  })), /* @__PURE__ */ React.createElement("section", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(AppCard_default, {
    textColor: cardData.card.textColor,
    backgroundColor: cardData.card.backgroundColor,
    username: cardData.card.username,
    nickname: cardData.card.nickname,
    email: cardData.card.email,
    website: cardData.card.website,
    twitter: cardData.card.twitter,
    facebook: cardData.card.facebook,
    classes: "shadow-md"
  })), /* @__PURE__ */ React.createElement("section", {
    className: "flex gap-x-4 justify-end"
  }, /* @__PURE__ */ React.createElement("p", null, "Share: "), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/intent/tweet?text=See%20my%20awesome%20generated%20profile%20card. ${cardData.card.url}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai2.AiFillTwitterSquare, {
    size: "32",
    className: "transition cursor-pointer hover:shadow-xl",
    style: {
      backgroundColor: cardData.card.backgroundColor,
      color: cardData.card.textColor
    }
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://www.facebook.com/sharer/sharer.php?u=${cardData.card.url}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai2.AiOutlineFacebook, {
    size: "32",
    className: "transition cursor-pointer hover:shadow-xl",
    style: {
      backgroundColor: cardData.card.backgroundColor,
      color: cardData.card.textColor
    }
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${cardData.card.url}&title=My%20Profile%20Card&summary=See%20my%20awesome%20profile%20card.&source=https://profilecardgen.discoverlance.com`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_ai2.AiFillLinkedin, {
    size: "32",
    className: "transition cursor-pointer hover:shadow-xl",
    style: {
      backgroundColor: cardData.card.backgroundColor,
      color: cardData.card.textColor
    }
  }))))));
};
var card_default = CardViewPage;
function CatchBoundary() {
  const caught = (0, import_remix4.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "grid place-items-center px-4 mx-auto max-w-2xl h-screen"
    }, /* @__PURE__ */ React.createElement("section", {
      className: "space-y-5"
    }, /* @__PURE__ */ React.createElement("h1", null, "404 - ", caught.statusText), /* @__PURE__ */ React.createElement("h2", null, caught.data)));
  }
  throw new Error(caught.data);
}
function ErrorBoundary({ error }) {
  const { card } = (0, import_remix4.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center px-4 mx-auto max-w-2xl h-screen"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "space-y-5"
  }, /* @__PURE__ */ React.createElement("h1", null, "Error Loading Card ", card), /* @__PURE__ */ React.createElement("h2", {
    className: "pl-5"
  }, error.message)));
}

// route-module:/workspace/personal-projects/profile-card/app/routes/cards/index.tsx
var cards_exports2 = {};
__export(cards_exports2, {
  action: () => action,
  default: () => cards_default2,
  meta: () => meta3
});
init_react();
var import_remix5 = __toModule(require_remix());
var import_remix6 = __toModule(require_remix());

// app/lib/form/validation.ts
init_react();
var import_yup = __toModule(require("yup"));
var validateCardField = async ({ type, value }) => {
  let validationMessage = "";
  switch (type) {
    case "username":
      validationMessage = await (0, import_yup.string)().required().min(5).max(50).validate(value).then(() => "").catch((error) => error.message);
      break;
    case "nickname":
      validationMessage = await (0, import_yup.string)().nullable().min(5).max(50).validate(value).then(() => "").catch((error) => error.message);
      break;
    case "email":
      validationMessage = await (0, import_yup.string)().email().nullable().validate(value).then(() => "").catch((error) => error.message);
      break;
    case "website":
      validationMessage = await (0, import_yup.string)().url().max(100).nullable().validate(value).then(() => "").catch((error) => error.message);
      break;
    case "twitter":
      validationMessage = await (0, import_yup.string)().max(20).nullable().validate(value).then(() => "").catch((error) => error.message);
      break;
    case "facebook":
      validationMessage = await (0, import_yup.string)().max(30).nullable().validate(value).then(() => "").catch((error) => error.message);
      break;
    case "backgroundColor":
      validationMessage = await (0, import_yup.string)().max(7).nullable().validate(value).then(() => "").catch((error) => error.message);
      break;
    case "textColor":
      validationMessage = await (0, import_yup.string)().max(7).nullable().validate(value).then(() => "").catch((error) => error.message);
      break;
    default:
      validationMessage = "validation failed";
      break;
  }
  return validationMessage;
};

// app/components/form/FormInput.tsx
init_react();
var FormInput = (props) => {
  const inputId = props.label.toLowerCase();
  return /* @__PURE__ */ React.createElement("div", {
    className: "my-3 space-y-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: inputId
  }, props.label, props.error ? /* @__PURE__ */ React.createElement("span", {
    className: "ml-3 text-sm text-white",
    role: "alert",
    id: inputId + "-error"
  }, "* ", props.error) : null), props.updateCardPreview ? /* @__PURE__ */ React.createElement("input", {
    placeholder: props.placeholder || "",
    type: props.type,
    id: inputId,
    name: props.name,
    autoComplete: "none",
    className: "block w-full h-10 px-2 text-gray-700 border-2 border-gray-200 shadow outline-none focus:shadow-xl focus:border-gray-500 shadow-pink-700 placeholder:text-gray-400",
    defaultValue: props.value,
    "aria-invalid": Boolean(props.error),
    "aria-describedby": props.error ? inputId + "-error" : void 0,
    onChange: (event) => props.updateCardPreview(props.name, event.target.value)
  }) : /* @__PURE__ */ React.createElement("input", {
    placeholder: props.placeholder || "",
    type: props.type,
    id: inputId,
    name: props.name,
    autoComplete: "none",
    className: "block w-full h-10 px-2 text-gray-700 border-2 border-gray-200 shadow outline-none focus:shadow-xl focus:border-gray-500 shadow-pink-700 placeholder:text-gray-400",
    defaultValue: props.value,
    "aria-invalid": Boolean(props.error),
    "aria-describedby": props.error ? inputId + "-error" : void 0
  }));
};
var FormInput_default = FormInput;

// route-module:/workspace/personal-projects/profile-card/app/routes/cards/index.tsx
var import_react = __toModule(require("react"));
var meta3 = () => {
  const [title, description] = [
    "Generate Card - Profile Card Generator",
    "Create and preview a profile card."
  ];
  return {
    title,
    description,
    "twitter:title": title,
    "twitter:description": description
  };
};
var badRequest = (data) => (0, import_remix6.json)(data, { status: 400 });
var action = async ({ request }) => {
  const form = await request.formData();
  const nickname = form.get("nickname");
  const username = form.get("username");
  const email = form.get("email");
  const website = form.get("website");
  const twitter = form.get("twitter");
  const facebook = form.get("facebook");
  const backgroundColor = form.get("backgroundColor");
  const textColor = form.get("textColor");
  const redirectTo = form.get("redirectTo") || "/";
  if (typeof redirectTo !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fields = {
    username,
    nickname,
    email,
    website,
    twitter,
    facebook,
    backgroundColor,
    textColor
  };
  const fieldErrors = {
    username: await validateCardField({
      type: "username",
      value: username || ""
    }),
    nickname: await validateCardField({
      type: "nickname",
      value: nickname || ""
    }),
    email: await validateCardField({
      type: "email",
      value: email || ""
    }),
    website: await validateCardField({
      type: "website",
      value: website || ""
    }),
    twitter: await validateCardField({
      type: "twitter",
      value: twitter || ""
    }),
    facebook: await validateCardField({
      type: "facebook",
      value: facebook || ""
    }),
    backgroundColor: await validateCardField({
      type: "backgroundColor",
      value: backgroundColor || ""
    }),
    textColor: await validateCardField({
      type: "textColor",
      value: textColor || ""
    })
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  const data = await saveCard(fields);
  if (data.name) {
    return (0, import_remix5.redirect)(redirectTo + "?url=" + data.name);
  } else {
    return badRequest({
      formError: `Could not save data: ${data || " please try again later."}`,
      fields
    });
  }
};
var Index = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const actionData = (0, import_remix6.useActionData)();
  const textColor = ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.textColor) || "#ffffff";
  const backgroundColor = ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.backgroundColor) || "#DB2777";
  const [dataPreview, setDataPreview] = (0, import_react.useState)({
    username: "",
    nickname: "",
    email: "",
    website: "",
    backgroundColor: "#DB2777",
    textColor: "#ffffff",
    facebook: "",
    twitter: ""
  });
  const updateDataPreview = (type, value) => {
    const newState = {};
    newState[type] = value;
    setDataPreview((prevState) => {
      return __spreadValues(__spreadValues({}, prevState), newState);
    });
  };
  const transition = (0, import_remix6.useTransition)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 h-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "px-8 text-white bg-pink-600"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white"
  }, "Generate a Card"), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl text-white"
  }, "Fill in the options below to generate a card"), /* @__PURE__ */ React.createElement("section", {
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post",
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message",
    className: "my-3"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "text-sm",
    role: "alert"
  }, "* ", actionData == null ? void 0 : actionData.formError) : null), /* @__PURE__ */ React.createElement("section", {
    className: "grid grid-cols-2 gap-x-8 w-full"
  }, /* @__PURE__ */ React.createElement(FormInput_default, {
    value: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.nickname,
    error: (_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.nickname,
    name: "nickname",
    type: "text",
    label: "Nickname",
    placeholder: "nickname",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.username,
    error: (_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username,
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "username",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: (_g = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _g.email,
    error: (_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.email,
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "email address",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: (_i = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _i.website,
    error: (_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.website,
    name: "website",
    type: "text",
    label: "website",
    placeholder: "full website url",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: (_k = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _k.facebook,
    error: (_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.facebook,
    name: "facebook",
    type: "text",
    label: "facebook",
    placeholder: "account name only",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: (_m = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _m.twitter,
    error: (_n = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _n.twitter,
    name: "twitter",
    type: "text",
    label: "Twitter",
    placeholder: "account name only",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement("fieldset", {
    className: "grid grid-cols-2 col-span-full gap-x-8"
  }, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Customize Profile Look"), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: backgroundColor,
    error: (_o = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _o.backgroundColor,
    name: "backgroundColor",
    type: "color",
    label: "Card BackgroundColor",
    placeholder: "Select background color",
    updateCardPreview: updateDataPreview
  }), /* @__PURE__ */ React.createElement(FormInput_default, {
    value: textColor,
    error: (_p = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _p.textColor,
    name: "textColor",
    type: "color",
    label: "Card TextColor",
    placeholder: "Select text color",
    updateCardPreview: updateDataPreview
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement(AppButton_default, {
    title: transition.state === "submitting" ? "Submitting..." : "Generate",
    color: "tertiary",
    type: "submit",
    classes: "hover:text-white hover:border-gray-200"
  })))))), /* @__PURE__ */ React.createElement("section", {
    className: "px-4 mt-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-center"
  }, "Preview Generated Card"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement(AppCard_default, {
    textColor: dataPreview.textColor,
    backgroundColor: dataPreview.backgroundColor,
    username: dataPreview.username,
    nickname: dataPreview.nickname,
    email: dataPreview.email,
    website: dataPreview.website,
    twitter: dataPreview.twitter,
    facebook: dataPreview.facebook
  }))));
};
var cards_default2 = Index;

// route-module:/workspace/personal-projects/profile-card/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  meta: () => meta4
});
init_react();
var import_remix7 = __toModule(require_remix());
var meta4 = () => {
  return {
    title: "Home - Profile Card Generator"
  };
};
function Index2() {
  const [searchParams] = (0, import_remix7.useSearchParams)();
  let SearchCardText = /* @__PURE__ */ React.createElement("p", null);
  if (searchParams.get("url")) {
    SearchCardText = /* @__PURE__ */ React.createElement("div", {
      className: "py-4 my-4 text-xl font-bold text-white bg-pink-600 border-2 border-gray-200 shadow-xl shadow-pink-600/20"
    }, "Card Successfully saved", " ", /* @__PURE__ */ React.createElement(import_remix7.Link, {
      to: `/cards/${searchParams.get("url")}`
    }, /* @__PURE__ */ React.createElement(AppButton_default, {
      title: "View Card",
      type: "button",
      size: "small",
      color: "tertiary",
      classes: "ml-3 hover:text-white hover:border-white"
    })), " ");
  }
  return /* @__PURE__ */ React.createElement(ThePrimaryLayout_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid place-items-center h-full text-center"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("header", {
    className: "space-y-4"
  }, SearchCardText, /* @__PURE__ */ React.createElement("h1", {
    className: ""
  }, "Profile Card Generator"), /* @__PURE__ */ React.createElement("h2", {
    className: ""
  }, "Generate and display a brightened profile!"), /* @__PURE__ */ React.createElement("h3", null, "Share your generated profile card on social media, save as pdf or an image.")), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/cards",
    prefetch: "render"
  }, /* @__PURE__ */ React.createElement(AppButton_default, {
    title: "Generate Card",
    color: "primary",
    classes: "mt-12"
  })))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/cards": {
    id: "routes/cards",
    parentId: "root",
    path: "cards",
    index: void 0,
    caseSensitive: void 0,
    module: cards_exports
  },
  "routes/cards/$card": {
    id: "routes/cards/$card",
    parentId: "routes/cards",
    path: ":card",
    index: void 0,
    caseSensitive: void 0,
    module: card_exports
  },
  "routes/cards/index": {
    id: "routes/cards/index",
    parentId: "routes/cards",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: cards_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi93b3Jrc3BhY2UvcGVyc29uYWwtcHJvamVjdHMvcHJvZmlsZS1jYXJkL2FwcC9yb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6L3dvcmtzcGFjZS9wZXJzb25hbC1wcm9qZWN0cy9wcm9maWxlLWNhcmQvYXBwL3JvdXRlcy9jYXJkcy50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9UaGVQcmltYXJ5TGF5b3V0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L3dvcmtzcGFjZS9wZXJzb25hbC1wcm9qZWN0cy9wcm9maWxlLWNhcmQvYXBwL3JvdXRlcy9jYXJkcy8kY2FyZC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvVUkvQXBwQ2FyZC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvVUkvQXBwQnV0dG9uLnRzeCIsICIuLi8uLi9hcHAvbGliL2NhcmQudHMiLCAicm91dGUtbW9kdWxlOi93b3Jrc3BhY2UvcGVyc29uYWwtcHJvamVjdHMvcHJvZmlsZS1jYXJkL2FwcC9yb3V0ZXMvY2FyZHMvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9saWIvZm9ybS92YWxpZGF0aW9uLnRzIiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2Zvcm0vRm9ybUlucHV0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L3dvcmtzcGFjZS9wZXJzb25hbC1wcm9qZWN0cy9wcm9maWxlLWNhcmQvYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi93b3Jrc3BhY2UvcGVyc29uYWwtcHJvamVjdHMvcHJvZmlsZS1jYXJkL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi93b3Jrc3BhY2UvcGVyc29uYWwtcHJvamVjdHMvcHJvZmlsZS1jYXJkL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvd29ya3NwYWNlL3BlcnNvbmFsLXByb2plY3RzL3Byb2ZpbGUtY2FyZC9hcHAvcm91dGVzL2NhcmRzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvd29ya3NwYWNlL3BlcnNvbmFsLXByb2plY3RzL3Byb2ZpbGUtY2FyZC9hcHAvcm91dGVzL2NhcmRzLyRjYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvd29ya3NwYWNlL3BlcnNvbmFsLXByb2plY3RzL3Byb2ZpbGUtY2FyZC9hcHAvcm91dGVzL2NhcmRzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvd29ya3NwYWNlL3BlcnNvbmFsLXByb2plY3RzL3Byb2ZpbGUtY2FyZC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvY2FyZHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jYXJkc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNhcmRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvY2FyZHMvJGNhcmRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jYXJkcy8kY2FyZFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9jYXJkc1wiLFxuICAgIHBhdGg6IFwiOmNhcmRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9jYXJkcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NhcmRzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2NhcmRzXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBkZXNjcmlwdGlvbl0gPSBbXG4gICAgXCJQcm9maWxlIENhcmQgR2VuZXJhdG9yXCIsXG4gICAgXCJHZW5lcmF0ZSBhbmQgZGlzcGxheSBhIGJyaWdodGVuZWQgcHJvZmlsZSFcIixcbiAgXTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgXCJ0d2l0dGVyOmltYWdlXCI6IFwiaHR0cHM6Ly9wcm9maWxlY2FyZGdlbi5kaXNjb3ZlcmxhbmNlLmNvbS9sb2dvLnBuZ1wiLFxuICAgIFwidHdpdHRlcjppbWFnZTphbHRcIjogYCR7dGl0bGV9IExvZ29gLFxuICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeVwiLFxuICAgIFwidHdpdHRlcjpjcmVhdG9yXCI6IFwiQEFybWFoTGFuY2VcIixcbiAgICBcInR3aXR0ZXI6c2l0ZVwiOiBcIkBBcm1haExhbmNlXCIsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IHRpdGxlLFxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJzY3JvbGwtc21vb3RoXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImFudGlhbGlhc2VkXCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBUaGVQcmltYXJ5TGF5b3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9UaGVQcmltYXJ5TGF5b3V0XCI7XG5cbmNvbnN0IENhcmRzUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGhlUHJpbWFyeUxheW91dD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L1RoZVByaW1hcnlMYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkc1BhZ2U7XG4iLCAiaW1wb3J0IFRoZVByaW1hcnlOYXZiYXIgZnJvbSBcIi4vbmF2aWdhdGlvbi9UaGVQcmltYXJ5TmF2YmFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn07XG5cbmNvbnN0IFRoZVByaW1hcnlMYXlvdXQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgbWluLWgtc2NyZWVuXCI+XG4gICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMlwiPlxuICAgICAgICA8VGhlUHJpbWFyeU5hdmJhciAvPlxuICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJoLXNjcmVlblwiPntwcm9wcy5jaGlsZHJlbn08L21haW4+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlUHJpbWFyeUxheW91dDtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VDYXRjaCwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBBcHBDYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvVUkvQXBwQ2FyZFwiO1xuaW1wb3J0IEFwcEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL1VJL0FwcEJ1dHRvblwiO1xuaW1wb3J0IHsgR2VuZXJhdGVkQ2FyZCB9IGZyb20gXCIuLi9jYXJkcy9pbmRleFwiO1xuaW1wb3J0IHsgZ2V0Q2FyZHMgfSBmcm9tIFwifi9saWIvY2FyZFwiO1xuaW1wb3J0IHtcbiAgQWlGaWxsVHdpdHRlclNxdWFyZSxcbiAgQWlGaWxsRmFjZWJvb2ssXG4gIEFpT3V0bGluZUZhY2Vib29rLFxuICBBaUZpbGxMaW5rZWRpbixcbn0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgY2FyZDogR2VuZXJhdGVkQ2FyZCAmIHsgaWQ6IHN0cmluZzsgdXJsOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7XG4gIGRhdGEsXG59OiB7XG4gIGRhdGE6IExvYWRlckRhdGEgfCB1bmRlZmluZWQ7XG59KSA9PiB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCJObyBDYXJkXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJObyBjYXJkIGZvdW5kXCIsXG4gICAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJObyBDYXJkXCIsXG4gICAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjogXCJObyBjYXJkIGZvdW5kXCIsXG4gICAgICBcInR3aXR0ZXI6aW1hZ2VcIjogXCJcIixcbiAgICAgIFwidHdpdHRlcjppbWFnZTphbHRcIjogXCJcIixcbiAgICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeVwiLFxuICAgICAgXCJ0d2l0dGVyOmNyZWF0b3JcIjogXCJcIixcbiAgICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiXCIsXG4gICAgfTtcbiAgfVxuICBjb25zdCBbdGl0bGUsIGRlc2NyaXB0aW9uXSA9IFtcbiAgICBkYXRhLmNhcmQudXNlcm5hbWUgKyBcIiBDYXJkIC0gUHJvZmlsZSBDYXJkIEdlbmVyYXRvclwiLFxuICAgIFwiVmlldyBHZW5lcmF0ZWQgQ2FyZCBGb3IgXCIgKyBkYXRhLmNhcmQudXNlcm5hbWUsXG4gIF07XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogdGl0bGUsXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vcHJvZmlsZWNhcmRnZW4uZGlzY292ZXJsYW5jZS5jb20vbG9nby5wbmdcIixcbiAgICBcInR3aXR0ZXI6aW1hZ2U6YWx0XCI6IGAke2RhdGEuY2FyZC51c2VybmFtZX0gUHJvZmlsZSBDYXJkIEltYWdlYCxcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBcIiArIGRhdGEuY2FyZC50d2l0dGVyLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQEFybWFoTGFuY2VcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGxvYWRlZENhcmRzID0gYXdhaXQgZ2V0Q2FyZHMoKTtcblxuICBpZiAoIWxvYWRlZENhcmRzKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiRXJyb3IgbG9hZGluZyBjYXJkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLCB7XG4gICAgICBzdGF0dXM6IDUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vZ2V0IGtleXNcbiAgY29uc3QgY2FyZEtleXMgPSBPYmplY3Qua2V5cyhsb2FkZWRDYXJkcyk7XG5cbiAgaWYgKGNhcmRLZXlzLmluY2x1ZGVzKHBhcmFtcy5jYXJkISkpIHtcbiAgICBjb25zdCBjYXJkID0gbG9hZGVkQ2FyZHNbcGFyYW1zLmNhcmQhXTtcbiAgICBjYXJkLmlkID0gcGFyYW1zLmNhcmQ7XG4gICAgY2FyZC51cmwgPSByZXF1ZXN0LnVybDtcbiAgICByZXR1cm4geyBjYXJkOiBjYXJkIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFxuICAgICAgXCJDYXJkIFwiICtcbiAgICAgICAgcGFyYW1zLmNhcmQgK1xuICAgICAgICBcIiBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIGNoZWNrIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGxpbmsgYW5kIHJldHJ5LlwiLFxuICAgICAgeyBzdGF0dXM6IDQwNCB9XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgQ2FyZFZpZXdQYWdlID0gKCkgPT4ge1xuICBsZXQgY2FyZERhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBtYXgtdy14bCBoLXNjcmVlblwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3BhY2UteS04XCI+XG4gICAgICAgIDxoMT5Qcm9maWxlIENhcmQ8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxBcHBCdXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiRWRpdCBDYXJkXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY29sb3I9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiBhbGVydChcIkVkaXRpbmcgbm90IGFkZGVkIHlldFwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8QXBwQ2FyZFxuICAgICAgICAgICAgdGV4dENvbG9yPXtjYXJkRGF0YS5jYXJkLnRleHRDb2xvcn1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17Y2FyZERhdGEuY2FyZC5iYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICB1c2VybmFtZT17Y2FyZERhdGEuY2FyZC51c2VybmFtZX1cbiAgICAgICAgICAgIG5pY2tuYW1lPXtjYXJkRGF0YS5jYXJkLm5pY2tuYW1lfVxuICAgICAgICAgICAgZW1haWw9e2NhcmREYXRhLmNhcmQuZW1haWx9XG4gICAgICAgICAgICB3ZWJzaXRlPXtjYXJkRGF0YS5jYXJkLndlYnNpdGV9XG4gICAgICAgICAgICB0d2l0dGVyPXtjYXJkRGF0YS5jYXJkLnR3aXR0ZXJ9XG4gICAgICAgICAgICBmYWNlYm9vaz17Y2FyZERhdGEuY2FyZC5mYWNlYm9va31cbiAgICAgICAgICAgIGNsYXNzZXM9XCJzaGFkb3ctbWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgey8qIFNvY2lhbCBtZWRpYSBzaGFyZSBsaW5rcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBnYXAteC00IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPHA+U2hhcmU6IDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PVNlZSUyMG15JTIwYXdlc29tZSUyMGdlbmVyYXRlZCUyMHByb2ZpbGUlMjBjYXJkLiAke2NhcmREYXRhLmNhcmQudXJsfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWlGaWxsVHdpdHRlclNxdWFyZVxuICAgICAgICAgICAgICAgIHNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciBob3ZlcjpzaGFkb3cteGxcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNhcmREYXRhLmNhcmQuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGNhcmREYXRhLmNhcmQudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7Y2FyZERhdGEuY2FyZC51cmx9YH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVGYWNlYm9va1xuICAgICAgICAgICAgICAgIHNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlciBob3ZlcjpzaGFkb3cteGxcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNhcmREYXRhLmNhcmQuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGNhcmREYXRhLmNhcmQudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7Y2FyZERhdGEuY2FyZC51cmx9JnRpdGxlPU15JTIwUHJvZmlsZSUyMENhcmQmc3VtbWFyeT1TZWUlMjBteSUyMGF3ZXNvbWUlMjBwcm9maWxlJTIwY2FyZC4mc291cmNlPWh0dHBzOi8vcHJvZmlsZWNhcmRnZW4uZGlzY292ZXJsYW5jZS5jb21gfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFpRmlsbExpbmtlZGluXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjMyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy14bFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2FyZERhdGEuY2FyZC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogY2FyZERhdGEuY2FyZC50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRWaWV3UGFnZTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBweC00IG14LWF1dG8gbWF4LXctMnhsIGgtc2NyZWVuXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgIDxoMT40MDQgLSB7Y2F1Z2h0LnN0YXR1c1RleHR9PC9oMT5cbiAgICAgICAgICA8aDI+e2NhdWdodC5kYXRhfTwvaDI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhKTtcbn1cblxuLy9AdHMtaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgY29uc3QgeyBjYXJkIH0gPSB1c2VQYXJhbXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHB4LTQgbXgtYXV0byBtYXgtdy0yeGwgaC1zY3JlZW5cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICA8aDE+RXJyb3IgTG9hZGluZyBDYXJkIHtjYXJkfTwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwbC01XCI+e2Vycm9yLm1lc3NhZ2V9PC9oMj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBaUZpbGxUd2l0dGVyU3F1YXJlLFxuICBBaUZpbGxGYWNlYm9vayxcbiAgQWlPdXRsaW5lTGluayxcbiAgQWlUd290b25lTWFpbCxcbn0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICB3ZWJzaXRlPzogc3RyaW5nO1xuICB0d2l0dGVyPzogc3RyaW5nO1xuICBmYWNlYm9vaz86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbn07XG5cbmNvbnN0IEFwcENhcmQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGxldCB3ZWJzaXRlID0gXCJ3XCI7XG4gIHRyeSB7XG4gICAgd2Vic2l0ZSA9IG5ldyBVUkwocHJvcHMud2Vic2l0ZSB8fCBcIlwiKS5ob3N0bmFtZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB3ZWJzaXRlID0gXCJ3ZWJzaXRlXCI7XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICBjb2xvcjogcHJvcHMudGV4dENvbG9yLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgcC0zIHctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgJHtcbiAgICAgICAgcHJvcHMuY2xhc3NlcyA/IHByb3BzLmNsYXNzZXMgOiBcIlwiXG4gICAgICB9YH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLXgtNCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cHJvcHMudXNlcm5hbWV9PC9oMz5cbiAgICAgICAgeyhwcm9wcy5mYWNlYm9vayB8fCBwcm9wcy50d2l0dGVyKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTRcIj5cbiAgICAgICAgICAgIHtwcm9wcy50d2l0dGVyICYmIChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3Byb3BzLnR3aXR0ZXJ9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFpRmlsbFR3aXR0ZXJTcXVhcmVcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy14bFwiXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvcHMuZmFjZWJvb2sgJiYgKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3dlYi5mYWNlYm9vay5jb20vJHtwcm9wcy5mYWNlYm9va31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QWlGaWxsRmFjZWJvb2tcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy14bFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIHsocHJvcHMubmlja25hbWUgfHwgcHJvcHMuZW1haWwpICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAge3Byb3BzLm5pY2tuYW1lICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgIE5pY2tuYW1lOiAoe3Byb3BzLm5pY2tuYW1lfSlcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMiBpdGVtcy1jZW50ZXIgdGV4dC1tZFwiPlxuICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVNYWlsIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7cHJvcHMuZW1haWx9YH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMuZW1haWx9XG4gICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7cHJvcHMud2Vic2l0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTIgaXRlbXMtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZUxpbmsgY2xhc3NOYW1lPVwiXCIgLz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy53ZWJzaXRlfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt3ZWJzaXRlfVxuICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDYXJkO1xuIiwgInR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmcgfCBKU1guRWxlbWVudDtcbiAgY29sb3I6IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwidGVydGlhcnlcIjtcbiAgcm91bmRlZD86IGJvb2xlYW47XG4gIHR5cGU/OiBcInN1Ym1pdFwiIHwgXCJyZXNldFwiIHwgXCJidXR0b25cIjtcbiAgYWN0aW9uPzogKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBzaXplPzogXCJzbWFsbFwiIHwgXCJkZWZhdWx0XCIgfCBcImxhcmdlXCI7XG59O1xuXG5jb25zdCBBcHBCdXR0b24gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IGJ1dHRvblNpemUgPSBwcm9wcy5zaXplIHx8IFwiZGVmYXVsdFwiO1xuICBsZXQgY29tcHV0ZWRDbGFzc2VzID0gYCR7XG4gICAgcHJvcHMuY2xhc3NlcyB8fCBcIlwiXG4gIH0gY3Vyc29yLXBvaW50ZXIgZm9udC1tZWRpdW0gdGV4dC1sZyBib3JkZXItMmA7XG5cbiAgaWYgKHByb3BzLmNvbG9yID09PSBcInByaW1hcnlcIikge1xuICAgIGNvbXB1dGVkQ2xhc3NlcyArPVxuICAgICAgXCIgaG92ZXI6dGV4dC1yb3NlLTYwMCBob3ZlcjpiZy1ub25lIGhvdmVyOmJvcmRlci1waW5rLTYwMCBib3JkZXItZ3JheS0yMDAgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay02MDAgdG8tcm9zZS02MDAgc2hhZG93LW1kIHNoYWRvdy1yb3NlLTYwMC80MFwiO1xuICB9IGVsc2UgaWYgKHByb3BzLmNvbG9yID09PSBcInNlY29uZGFyeVwiKSB7XG4gICAgY29tcHV0ZWRDbGFzc2VzICs9XG4gICAgICBcIiBob3Zlcjp0ZXh0LXBpbmstNjAwIGhvdmVyOmJnLW5vbmUgaG92ZXI6Ym9yZGVyLXJvc2UtNjAwIGJvcmRlci1ncmF5LTIwMCB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yb3NlLTYwMCB0by1waW5rLTYwMCBzaGFkb3ctbWQgc2hhZG93LXBpbmstNjAwLzQwXCI7XG4gIH0gZWxzZSBpZiAocHJvcHMuY29sb3IgPT09IFwidGVydGlhcnlcIikge1xuICAgIGNvbXB1dGVkQ2xhc3NlcyArPVxuICAgICAgXCIgaG92ZXI6dGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1ub25lIGhvdmVyOmJvcmRlci1ncmF5LTYwMCBib3JkZXItZ3JheS0yMDAgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS00MDAgdG8tZ3JheS04MDAgc2hhZG93LW1kIHNoYWRvdy1ncmF5LTYwMC80MFwiO1xuICB9XG5cbiAgaWYgKGJ1dHRvblNpemUgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgY29tcHV0ZWRDbGFzc2VzICs9IFwiIHB4LTYgcHktM1wiO1xuICB9IGVsc2UgaWYgKGJ1dHRvblNpemUgPT09IFwic21hbGxcIikge1xuICAgIGNvbXB1dGVkQ2xhc3NlcyArPSBcIiBweC0zIHB5LTFcIjtcbiAgfSBlbHNlIGlmIChidXR0b25TaXplID09PSBcImxhcmdlXCIpIHtcbiAgICBjb21wdXRlZENsYXNzZXMgKz0gXCIgcHgtOCBweS00XCI7XG4gIH1cblxuICBpZiAocHJvcHMuYWN0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT17cHJvcHMudHlwZSB8fCBcImJ1dHRvblwifVxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5hY3Rpb259XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcHV0ZWRDbGFzc2VzfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiB0eXBlPXtwcm9wcy50eXBlIHx8IFwiYnV0dG9uXCJ9IGNsYXNzTmFtZT17Y29tcHV0ZWRDbGFzc2VzfT5cbiAgICAgIHtwcm9wcy50aXRsZX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEJ1dHRvbjtcbiIsICJpbXBvcnQgeyBHZW5lcmF0ZWRDYXJkIH0gZnJvbSBcIn4vcm91dGVzL2NhcmRzL2luZGV4XCI7XG5cbmV4cG9ydCBjb25zdCBzYXZlQ2FyZCA9IGFzeW5jIChkYXRhOiBHZW5lcmF0ZWRDYXJkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL3BlcnNvbmFsLWZpcmViYXNlLXByb2plY3RzLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvY2FyZHMuanNvblwiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9XG4gIClcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vcGVyc29uYWwtZmlyZWJhc2UtcHJvamVjdHMtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9jYXJkcy5qc29uXCJcbiAgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IG9iamVjdCwgc3RyaW5nIH0gZnJvbSBcInl1cFwiO1xuXG5pbXBvcnQge1xuICB1c2VBY3Rpb25EYXRhLFxuICBqc29uLFxuICB1c2VTZWFyY2hQYXJhbXMsXG4gIHVzZVRyYW5zaXRpb24sXG4gIExpbmssXG4gIEZvcm0sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEFwcEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL1VJL0FwcEJ1dHRvblwiO1xuaW1wb3J0IHsgdmFsaWRhdGVDYXJkRmllbGQgfSBmcm9tIFwifi9saWIvZm9ybS92YWxpZGF0aW9uXCI7XG5pbXBvcnQgRm9ybUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybS9Gb3JtSW5wdXRcIjtcbmltcG9ydCBBcHBDYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvVUkvQXBwQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNhdmVDYXJkIH0gZnJvbSBcIn4vbGliL2NhcmRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBkZXNjcmlwdGlvbl0gPSBbXG4gICAgXCJHZW5lcmF0ZSBDYXJkIC0gUHJvZmlsZSBDYXJkIEdlbmVyYXRvclwiLFxuICAgIFwiQ3JlYXRlIGFuZCBwcmV2aWV3IGEgcHJvZmlsZSBjYXJkLlwiLFxuICBdO1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogdGl0bGUsXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2VuZXJhdGVkQ2FyZCA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbmlja25hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgd2Vic2l0ZTogc3RyaW5nO1xuICBmYWNlYm9vazogc3RyaW5nO1xuICB0d2l0dGVyOiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IHN0cmluZztcbn07XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICB1c2VybmFtZTogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHwgdW5kZWZpbmVkO1xuICAgIG5pY2tuYW1lOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gICAgZW1haWw6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZDtcbiAgICB3ZWJzaXRlOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gICAgZmFjZWJvb2s6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZDtcbiAgICB0d2l0dGVyOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gICAgdGV4dENvbG9yOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IEdlbmVyYXRlZENhcmQ7XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3Qgbmlja25hbWUgPSBmb3JtLmdldChcIm5pY2tuYW1lXCIpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG4gIGNvbnN0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcbiAgY29uc3Qgd2Vic2l0ZSA9IGZvcm0uZ2V0KFwid2Vic2l0ZVwiKTtcbiAgY29uc3QgdHdpdHRlciA9IGZvcm0uZ2V0KFwidHdpdHRlclwiKTtcbiAgY29uc3QgZmFjZWJvb2sgPSBmb3JtLmdldChcImZhY2Vib29rXCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBmb3JtLmdldChcImJhY2tncm91bmRDb2xvclwiKTtcbiAgY29uc3QgdGV4dENvbG9yID0gZm9ybS5nZXQoXCJ0ZXh0Q29sb3JcIik7XG5cbiAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSB8fCBcIi9cIjtcbiAgaWYgKHR5cGVvZiByZWRpcmVjdFRvICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZmllbGRzID0ge1xuICAgIHVzZXJuYW1lLFxuICAgIG5pY2tuYW1lLFxuICAgIGVtYWlsLFxuICAgIHdlYnNpdGUsXG4gICAgdHdpdHRlcixcbiAgICBmYWNlYm9vayxcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgdGV4dENvbG9yLFxuICB9IGFzIEdlbmVyYXRlZENhcmQ7XG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiBhd2FpdCB2YWxpZGF0ZUNhcmRGaWVsZCh7XG4gICAgICB0eXBlOiBcInVzZXJuYW1lXCIsXG4gICAgICB2YWx1ZTogdXNlcm5hbWUgfHwgXCJcIixcbiAgICB9KSxcbiAgICBuaWNrbmFtZTogYXdhaXQgdmFsaWRhdGVDYXJkRmllbGQoe1xuICAgICAgdHlwZTogXCJuaWNrbmFtZVwiLFxuICAgICAgdmFsdWU6IG5pY2tuYW1lIHx8IFwiXCIsXG4gICAgfSksXG4gICAgZW1haWw6IGF3YWl0IHZhbGlkYXRlQ2FyZEZpZWxkKHtcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgIHZhbHVlOiBlbWFpbCB8fCBcIlwiLFxuICAgIH0pLFxuICAgIHdlYnNpdGU6IGF3YWl0IHZhbGlkYXRlQ2FyZEZpZWxkKHtcbiAgICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgICAgdmFsdWU6IHdlYnNpdGUgfHwgXCJcIixcbiAgICB9KSxcbiAgICB0d2l0dGVyOiBhd2FpdCB2YWxpZGF0ZUNhcmRGaWVsZCh7XG4gICAgICB0eXBlOiBcInR3aXR0ZXJcIixcbiAgICAgIHZhbHVlOiB0d2l0dGVyIHx8IFwiXCIsXG4gICAgfSksXG4gICAgZmFjZWJvb2s6IGF3YWl0IHZhbGlkYXRlQ2FyZEZpZWxkKHtcbiAgICAgIHR5cGU6IFwiZmFjZWJvb2tcIixcbiAgICAgIHZhbHVlOiBmYWNlYm9vayB8fCBcIlwiLFxuICAgIH0pLFxuICAgIGJhY2tncm91bmRDb2xvcjogYXdhaXQgdmFsaWRhdGVDYXJkRmllbGQoe1xuICAgICAgdHlwZTogXCJiYWNrZ3JvdW5kQ29sb3JcIixcbiAgICAgIHZhbHVlOiBiYWNrZ3JvdW5kQ29sb3IgfHwgXCJcIixcbiAgICB9KSxcbiAgICB0ZXh0Q29sb3I6IGF3YWl0IHZhbGlkYXRlQ2FyZEZpZWxkKHtcbiAgICAgIHR5cGU6IFwidGV4dENvbG9yXCIsXG4gICAgICB2YWx1ZTogdGV4dENvbG9yIHx8IFwiXCIsXG4gICAgfSksXG4gIH07XG5cbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG4gIC8vIGNvbm5lY3QgdG8gZGF0YWJhc2UgYW5kIHNhdmUgdGhlIGRhdGFcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHNhdmVDYXJkKGZpZWxkcyk7XG4gIGlmIChkYXRhLm5hbWUpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbyArIFwiP3VybD1cIiArIGRhdGEubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiBgQ291bGQgbm90IHNhdmUgZGF0YTogJHtkYXRhIHx8IFwiIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCJ9YCxcbiAgICAgIGZpZWxkcyxcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gIGNvbnN0IHRleHRDb2xvciA9IGFjdGlvbkRhdGE/LmZpZWxkcz8udGV4dENvbG9yIHx8IFwiI2ZmZmZmZlwiO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb25EYXRhPy5maWVsZHM/LmJhY2tncm91bmRDb2xvciB8fCBcIiNEQjI3NzdcIjtcblxuICAvLyBzdGF0ZSBmb3IgZm9ybSBkYXRhIHByZXZpZXdcbiAgY29uc3QgW2RhdGFQcmV2aWV3LCBzZXREYXRhUHJldmlld10gPSB1c2VTdGF0ZTxHZW5lcmF0ZWRDYXJkPih7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgbmlja25hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgd2Vic2l0ZTogXCJcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RCMjc3N1wiLFxuICAgIHRleHRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgZmFjZWJvb2s6IFwiXCIsXG4gICAgdHdpdHRlcjogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlRGF0YVByZXZpZXcgPSAodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBuZXdTdGF0ZVt0eXBlXSA9IHZhbHVlO1xuICAgIHNldERhdGFQcmV2aWV3KChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgLi4ubmV3U3RhdGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBoLWZ1bGxcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTggdGV4dC13aGl0ZSBiZy1waW5rLTYwMFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+R2VuZXJhdGUgYSBDYXJkPC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgRmlsbCBpbiB0aGUgb3B0aW9ucyBiZWxvdyB0byBnZW5lcmF0ZSBhIGNhcmRcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgey8qIEZvcm0gKi99XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTJcIj5cbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyBcImZvcm0tZXJyb3ItbWVzc2FnZVwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZXJyb3ItbWVzc2FnZVwiIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAqIHthY3Rpb25EYXRhPy5mb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLXgtOCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5uaWNrbmFtZX1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ubmlja25hbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOaWNrbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5pY2tuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcmRQcmV2aWV3PXt1cGRhdGVEYXRhUHJldmlld31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FyZFByZXZpZXc9e3VwZGF0ZURhdGFQcmV2aWV3fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uZW1haWx9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICB1cGRhdGVDYXJkUHJldmlldz17dXBkYXRlRGF0YVByZXZpZXd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy53ZWJzaXRlfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy53ZWJzaXRlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndlYnNpdGVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWJzaXRlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZnVsbCB3ZWJzaXRlIHVybFwiXG4gICAgICAgICAgICAgICAgICB1cGRhdGVDYXJkUHJldmlldz17dXBkYXRlRGF0YVByZXZpZXd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5mYWNlYm9va31cbiAgICAgICAgICAgICAgICAgIGVycm9yPXthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZmFjZWJvb2t9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJmYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFjY291bnQgbmFtZSBvbmx5XCJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcmRQcmV2aWV3PXt1cGRhdGVEYXRhUHJldmlld31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnR3aXR0ZXJ9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnR3aXR0ZXJ9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhY2NvdW50IG5hbWUgb25seVwiXG4gICAgICAgICAgICAgICAgICB1cGRhdGVDYXJkUHJldmlldz17dXBkYXRlRGF0YVByZXZpZXd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBjb2wtc3Bhbi1mdWxsIGdhcC14LThcIj5cbiAgICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkN1c3RvbWl6ZSBQcm9maWxlIExvb2s8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5iYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmQgQmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYmFja2dyb3VuZCBjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcmRQcmV2aWV3PXt1cGRhdGVEYXRhUHJldmlld31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udGV4dENvbG9yfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkIFRleHRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IHRleHQgY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJkUHJldmlldz17dXBkYXRlRGF0YVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgey8qIFN1Ym1pdCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICAgICAgPEFwcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJTdWJtaXR0aW5nLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiR2VuZXJhdGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgbXQtNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QcmV2aWV3IEdlbmVyYXRlZCBDYXJkPC9oMj5cbiAgICAgICAgey8qIFBsYWNlIGEgY2FyZCBoZXJlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XG4gICAgICAgICAgPEFwcENhcmRcbiAgICAgICAgICAgIHRleHRDb2xvcj17ZGF0YVByZXZpZXcudGV4dENvbG9yfVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtkYXRhUHJldmlldy5iYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICB1c2VybmFtZT17ZGF0YVByZXZpZXcudXNlcm5hbWV9XG4gICAgICAgICAgICBuaWNrbmFtZT17ZGF0YVByZXZpZXcubmlja25hbWV9XG4gICAgICAgICAgICBlbWFpbD17ZGF0YVByZXZpZXcuZW1haWx9XG4gICAgICAgICAgICB3ZWJzaXRlPXtkYXRhUHJldmlldy53ZWJzaXRlfVxuICAgICAgICAgICAgdHdpdHRlcj17ZGF0YVByZXZpZXcudHdpdHRlcn1cbiAgICAgICAgICAgIGZhY2Vib29rPXtkYXRhUHJldmlldy5mYWNlYm9va31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwgImltcG9ydCB7IHN0cmluZyB9IGZyb20gXCJ5dXBcIjtcblxudHlwZSBJbnB1dCA9IHtcbiAgdHlwZTpcbiAgICB8IFwidXNlcm5hbWVcIlxuICAgIHwgXCJuaWNrbmFtZVwiXG4gICAgfCBcIndlYnNpdGVcIlxuICAgIHwgXCJ0d2l0dGVyXCJcbiAgICB8IFwiZmFjZWJvb2tcIlxuICAgIHwgXCJlbWFpbFwiXG4gICAgfCBcInRleHRDb2xvclwiXG4gICAgfCBcImJhY2tncm91bmRDb2xvclwiO1xuICB2YWx1ZTogRm9ybURhdGFFbnRyeVZhbHVlIHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUNhcmRGaWVsZCA9IGFzeW5jICh7IHR5cGUsIHZhbHVlIH06IElucHV0KSA9PiB7XG4gIGxldCB2YWxpZGF0aW9uTWVzc2FnZSA9IFwiXCI7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJ1c2VybmFtZVwiOlxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBhd2FpdCBzdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoKVxuICAgICAgICAubWluKDUpXG4gICAgICAgIC5tYXgoNTApXG4gICAgICAgIC52YWxpZGF0ZSh2YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gXCJcIilcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibmlja25hbWVcIjpcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gYXdhaXQgc3RyaW5nKClcbiAgICAgICAgLm51bGxhYmxlKClcbiAgICAgICAgLm1pbig1KVxuICAgICAgICAubWF4KDUwKVxuICAgICAgICAudmFsaWRhdGUodmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IFwiXCIpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yLm1lc3NhZ2UpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImVtYWlsXCI6XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGF3YWl0IHN0cmluZygpXG4gICAgICAgIC5lbWFpbCgpXG4gICAgICAgIC5udWxsYWJsZSgpXG4gICAgICAgIC52YWxpZGF0ZSh2YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gXCJcIilcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwid2Vic2l0ZVwiOlxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBhd2FpdCBzdHJpbmcoKVxuICAgICAgICAudXJsKClcbiAgICAgICAgLm1heCgxMDApXG4gICAgICAgIC5udWxsYWJsZSgpXG4gICAgICAgIC52YWxpZGF0ZSh2YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gXCJcIilcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidHdpdHRlclwiOlxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBhd2FpdCBzdHJpbmcoKVxuICAgICAgICAubWF4KDIwKVxuICAgICAgICAubnVsbGFibGUoKVxuICAgICAgICAudmFsaWRhdGUodmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IFwiXCIpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yLm1lc3NhZ2UpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImZhY2Vib29rXCI6XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGF3YWl0IHN0cmluZygpXG4gICAgICAgIC5tYXgoMzApXG4gICAgICAgIC5udWxsYWJsZSgpXG4gICAgICAgIC52YWxpZGF0ZSh2YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4gXCJcIilcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYmFja2dyb3VuZENvbG9yXCI6XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGF3YWl0IHN0cmluZygpXG4gICAgICAgIC5tYXgoNylcbiAgICAgICAgLm51bGxhYmxlKClcbiAgICAgICAgLnZhbGlkYXRlKHZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiBcIlwiKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvci5tZXNzYWdlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0ZXh0Q29sb3JcIjpcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gYXdhaXQgc3RyaW5nKClcbiAgICAgICAgLm1heCg3KVxuICAgICAgICAubnVsbGFibGUoKVxuICAgICAgICAudmFsaWRhdGUodmFsdWUpXG4gICAgICAgIC50aGVuKCgpID0+IFwiXCIpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yLm1lc3NhZ2UpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRmllbGQgaXMgcHJvYmFibHkgbm90IGZvdW5kXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IFwidmFsaWRhdGlvbiBmYWlsZWRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlO1xufTtcbiIsICJ0eXBlIFByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB0eXBlOlxuICAgIHwgXCJlbWFpbFwiXG4gICAgfCBcImRhdGVcIlxuICAgIHwgXCJ0ZXh0XCJcbiAgICB8IFwibnVtYmVyXCJcbiAgICB8IFwiY2hlY2tib3hcIlxuICAgIHwgXCJyYWRpb1wiXG4gICAgfCBcImltYWdlXCJcbiAgICB8IFwidXJsXCJcbiAgICB8IFwiY29sb3JcIlxuICAgIHwgXCJzdWJtaXRcIjtcbiAgbmFtZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgZXJyb3I6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB8IHVuZGVmaW5lZDtcbiAgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdXBkYXRlQ2FyZFByZXZpZXc/OiAodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuY29uc3QgRm9ybUlucHV0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBpbnB1dElkID0gcHJvcHMubGFiZWwudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMyBzcGFjZS15LTJcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dElkfT5cbiAgICAgICAge3Byb3BzLmxhYmVsfVxuXG4gICAgICAgIHtwcm9wcy5lcnJvciA/IChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXNtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgIGlkPXtpbnB1dElkICsgXCItZXJyb3JcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAqIHtwcm9wcy5lcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIHtwcm9wcy51cGRhdGVDYXJkUHJldmlldyA/IChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyIHx8IFwiXCJ9XG4gICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cbiAgICAgICAgICBpZD17aW5wdXRJZH1cbiAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vbmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBoLTEwIHB4LTIgdGV4dC1ncmF5LTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgc2hhZG93IG91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3cteGwgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHNoYWRvdy1waW5rLTcwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihwcm9wcy5lcnJvcil9XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17cHJvcHMuZXJyb3IgPyBpbnB1dElkICsgXCItZXJyb3JcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBwcm9wcy51cGRhdGVDYXJkUHJldmlldyhwcm9wcy5uYW1lLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyIHx8IFwiXCJ9XG4gICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cbiAgICAgICAgICBpZD17aW5wdXRJZH1cbiAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vbmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBoLTEwIHB4LTIgdGV4dC1ncmF5LTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgc2hhZG93IG91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3cteGwgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIHNoYWRvdy1waW5rLTcwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihwcm9wcy5lcnJvcil9XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17cHJvcHMuZXJyb3IgPyBpbnB1dElkICsgXCItZXJyb3JcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5wdXQ7XG4iLCAiaW1wb3J0IHsgTGluaywgTWV0YUZ1bmN0aW9uLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBUaGVQcmltYXJ5TGF5b3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9UaGVQcmltYXJ5TGF5b3V0XCI7XG5pbXBvcnQgQXBwQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvVUkvQXBwQnV0dG9uXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiSG9tZSAtIFByb2ZpbGUgQ2FyZCBHZW5lcmF0b3JcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIGxldCBTZWFyY2hDYXJkVGV4dCA9IDxwPjwvcD47XG5cbiAgaWYgKHNlYXJjaFBhcmFtcy5nZXQoXCJ1cmxcIikpIHtcbiAgICBTZWFyY2hDYXJkVGV4dCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBteS00IHRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctcGluay02MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHNoYWRvdy14bCBzaGFkb3ctcGluay02MDAvMjBcIj5cbiAgICAgICAgQ2FyZCBTdWNjZXNzZnVsbHkgc2F2ZWR7XCIgXCJ9XG4gICAgICAgIDxMaW5rIHRvPXtgL2NhcmRzLyR7c2VhcmNoUGFyYW1zLmdldChcInVybFwiKX1gfT5cbiAgICAgICAgICA8QXBwQnV0dG9uXG4gICAgICAgICAgICB0aXRsZT1cIlZpZXcgQ2FyZFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBjb2xvcj1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzZXM9XCJtbC0zIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxUaGVQcmltYXJ5TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBoLWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIHtTZWFyY2hDYXJkVGV4dH1cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIj5Qcm9maWxlIENhcmQgR2VuZXJhdG9yPC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj5HZW5lcmF0ZSBhbmQgZGlzcGxheSBhIGJyaWdodGVuZWQgcHJvZmlsZSE8L2gyPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICBTaGFyZSB5b3VyIGdlbmVyYXRlZCBwcm9maWxlIGNhcmQgb24gc29jaWFsIG1lZGlhLCBzYXZlIGFzIHBkZiBvclxuICAgICAgICAgICAgICBhbiBpbWFnZS5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgey8qIENyZWF0ZSBjYXJkICovfVxuICAgICAgICAgIDxMaW5rIHRvPVwiL2NhcmRzXCIgcHJlZmV0Y2g9XCJyZW5kZXJcIj5cbiAgICAgICAgICAgIDxBcHBCdXR0b24gdGl0bGU9XCJHZW5lcmF0ZSBDYXJkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3Nlcz1cIm10LTEyXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlUHJpbWFyeUxheW91dD5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlB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

import { ActionFunction, MetaFunction, redirect } from "remix";
import { object, string } from "yup";

import {
  useActionData,
  json,
  useSearchParams,
  useTransition,
  Link,
  Form,
} from "remix";
import AppButton from "~/components/UI/AppButton";
import { validateCardField } from "~/lib/form/validation";
import FormInput from "~/components/form/FormInput";
import AppCard from "~/components/UI/AppCard";
import { useState } from "react";
import { saveCard } from "~/lib/card";
import FormTextArea from "~/components/form/FormTextArea";

export const meta: MetaFunction = () => {
  const [title, description] = [
    "Generate Card - Profile Card Generator",
    "Create and preview a profile card.",
  ];
  return {
    title: title,
    description,
    "twitter:title": title,
    "twitter:description": description,
  };
};

export type GeneratedCard = {
  username: string;
  nickname: string;
  email: string;
  website: string;
  facebook: string;
  twitter: string;
  backgroundColor: string;
  textColor: string;
  aboutMe: string;
};

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | Promise<string> | undefined;
    nickname: string | Promise<string> | undefined;
    email: string | Promise<string> | undefined;
    website: string | Promise<string> | undefined;
    facebook: string | Promise<string> | undefined;
    twitter: string | Promise<string> | undefined;
    backgroundColor: string | Promise<string> | undefined;
    textColor: string | Promise<string> | undefined;
    aboutMe: string | Promise<string> | undefined;
  };
  fields?: GeneratedCard;
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const nickname = form.get("nickname");
  const username = form.get("username");
  const email = form.get("email");
  const website = form.get("website");
  const twitter = form.get("twitter");
  const facebook = form.get("facebook");
  const backgroundColor = form.get("backgroundColor");
  const textColor = form.get("textColor");
  const aboutMe = form.get("aboutMe");

  const fields = {
    username,
    nickname,
    email,
    website,
    twitter,
    facebook,
    backgroundColor,
    textColor,
    aboutMe,
  } as GeneratedCard;
  const fieldErrors = {
    username: await validateCardField({
      type: "username",
      value: username || "",
    }),
    nickname: await validateCardField({
      type: "nickname",
      value: nickname || "",
    }),
    email: await validateCardField({
      type: "email",
      value: email || "",
    }),
    website: await validateCardField({
      type: "website",
      value: website || "",
    }),
    twitter: await validateCardField({
      type: "twitter",
      value: twitter || "",
    }),
    facebook: await validateCardField({
      type: "facebook",
      value: facebook || "",
    }),
    backgroundColor: await validateCardField({
      type: "backgroundColor",
      value: backgroundColor || "",
    }),
    textColor: await validateCardField({
      type: "textColor",
      value: textColor || "",
    }),
    aboutMe: await validateCardField({
      type: "aboutMe",
      value: aboutMe || "",
    }),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  // connect to database and save the data
  const data = await saveCard(fields);
  if (data.name) {
    const redirectTo = form.get("redirectTo") || "/cards/" + data.name;
    if (typeof redirectTo !== "string") {
      return badRequest({
        formError: `Form not submitted correctly.`,
      });
    }
    return redirect(redirectTo);
  } else {
    return badRequest({
      formError: `Could not save data: ${data || " please try again later."}`,
      fields,
    });
  }
};

const Index = () => {
  const actionData = useActionData<ActionData>();
  const textColor = actionData?.fields?.textColor || "#ffffff";
  const backgroundColor = actionData?.fields?.backgroundColor || "#DB2777";

  // state for form data preview
  const [dataPreview, setDataPreview] = useState<GeneratedCard>({
    username: "",
    nickname: "",
    email: "",
    website: "",
    backgroundColor: "#DB2777",
    textColor: "#ffffff",
    facebook: "",
    twitter: "",
    aboutMe: "",
  });

  const updateDataPreview = (type: string, value: string) => {
    const newState: Record<string, string> = {};
    newState[type] = value;
    setDataPreview((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  const transition = useTransition();
  const [searchParams] = useSearchParams();
  return (
    <div className="grid grid-cols-1 min-h-full md:grid-cols-2">
      <section className="px-8 pb-3 text-white bg-pink-600 md:pb-0">
        <div>
          <h1 className="text-white">Generate a Card</h1>
          <h2 className="text-xl text-white">
            No other field is required apart from your username.
          </h2>

          {/* Form */}
          <section className="mt-3">
            <Form
              method="post"
              aria-describedby={
                actionData?.formError ? "form-error-message" : undefined
              }
            >
              <input
                type="hidden"
                name="redirectTo"
                value={searchParams.get("redirectTo") ?? undefined}
              />

              <div id="form-error-message" className="my-3">
                {actionData?.formError ? (
                  <p className="text-sm" role="alert">
                    * {actionData?.formError}
                  </p>
                ) : null}
              </div>

              <section className="grid grid-cols-1 gap-x-8 w-full sm:grid-cols-2">
                <FormInput
                  value={actionData?.fields?.nickname}
                  error={actionData?.fieldErrors?.nickname}
                  name="nickname"
                  type="text"
                  label="Nickname"
                  placeholder="nickname"
                  updateCardPreview={updateDataPreview}
                />
                <FormInput
                  value={actionData?.fields?.username}
                  error={actionData?.fieldErrors?.username}
                  name="username"
                  type="text"
                  label="Username"
                  placeholder="username"
                  updateCardPreview={updateDataPreview}
                />
                <FormInput
                  value={actionData?.fields?.email}
                  error={actionData?.fieldErrors?.email}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="email address"
                  updateCardPreview={updateDataPreview}
                />
                <FormInput
                  value={actionData?.fields?.website}
                  error={actionData?.fieldErrors?.website}
                  name="website"
                  type="text"
                  label="Website"
                  placeholder="full website url"
                  updateCardPreview={updateDataPreview}
                />
                <FormInput
                  value={actionData?.fields?.facebook}
                  error={actionData?.fieldErrors?.facebook}
                  name="facebook"
                  type="text"
                  label="Facebook"
                  placeholder="account name only"
                  updateCardPreview={updateDataPreview}
                />
                <FormInput
                  value={actionData?.fields?.twitter}
                  error={actionData?.fieldErrors?.twitter}
                  name="twitter"
                  type="text"
                  label="Twitter"
                  placeholder="account name only"
                  updateCardPreview={updateDataPreview}
                />
                <div className="col-span-full">
                  <FormTextArea
                    value={actionData?.fields?.aboutMe}
                    error={actionData?.fieldErrors?.aboutMe}
                    name="aboutMe"
                    label="About Me"
                    placeholder="Say something about yourself in not more than 100 characters"
                    updateCardPreview={updateDataPreview}
                  />
                </div>
                <fieldset className="grid grid-cols-1 col-span-full gap-x-8 sm:grid-cols-2">
                  <legend className="sr-only">Customize Profile Look</legend>
                  <FormInput
                    value={backgroundColor}
                    error={actionData?.fieldErrors?.backgroundColor}
                    name="backgroundColor"
                    type="color"
                    label="Card BackgroundColor"
                    placeholder="Select background color"
                    updateCardPreview={updateDataPreview}
                  />
                  <FormInput
                    value={textColor}
                    error={actionData?.fieldErrors?.textColor}
                    name="textColor"
                    type="color"
                    label="Card TextColor"
                    placeholder="Select text color"
                    updateCardPreview={updateDataPreview}
                  />
                </fieldset>
              </section>
              {/* Submit */}
              <div className="mt-5">
                <AppButton
                  title={
                    transition.state === "submitting"
                      ? "Submitting..."
                      : "Generate"
                  }
                  color="tertiary"
                  type="submit"
                  classes="hover:text-white hover:border-gray-200"
                />
              </div>
            </Form>
          </section>
        </div>
      </section>
      <section className="px-8 mt-2">
        <h2 className="text-center">Preview Generated Card</h2>
        {/* Place a card here */}
        <div className="mt-12">
          <AppCard
            textColor={dataPreview.textColor}
            backgroundColor={dataPreview.backgroundColor}
            username={dataPreview.username}
            nickname={dataPreview.nickname}
            email={dataPreview.email}
            website={dataPreview.website}
            twitter={dataPreview.twitter}
            facebook={dataPreview.facebook}
            aboutMe={dataPreview.aboutMe}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;

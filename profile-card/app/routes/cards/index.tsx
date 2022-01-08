import type { ActionFunction, MetaFunction } from "remix";
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

  const redirectTo = form.get("redirectTo") || "/cards";
  if (typeof redirectTo !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`,
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
    textColor,
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
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  // connect to database and save the data
  console.log("validation successfull");
  console.log(fields);
  return json({ formError: "" }, { status: 201 });
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
    backgroundColor: "",
    textColor: "",
    facebook: "",
    twitter: "",
  });

  const updateDataPreview = (type: string, value: string) => {
    const newState: Record<string, string> = {};
    newState[type] = value;
    setDataPreview((prevState) => {
      return { ...prevState, ...newState };
    });
    console.log("update state", dataPreview.backgroundColor, "ended");
  };

  const transition = useTransition();
  const [searchParams] = useSearchParams();
  return (
    <div className="grid h-full grid-cols-2">
      <section className="px-8 text-white bg-pink-600">
        <div>
          <h1 className="text-white">Generate a Card</h1>
          <h2 className="text-2xl text-white">
            Fill in the options below to generate a card
          </h2>

          {/* Form */}
          <section className="mt-12">
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

              <section className="grid w-full grid-cols-2 gap-x-8">
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
                  label="website"
                  placeholder="full website url"
                  updateCardPreview={updateDataPreview}
                />
                <FormInput
                  value={actionData?.fields?.facebook}
                  error={actionData?.fieldErrors?.facebook}
                  name="facebook"
                  type="text"
                  label="facebook"
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
                <fieldset className="grid grid-cols-2 col-span-full gap-x-8">
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
      <section className="px-4 mt-4">
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
          />
        </div>
      </section>
    </div>
  );
};

export default Index;

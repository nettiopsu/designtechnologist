declare module "*.module.css";

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "@mdx-js/react" {
  import * as React from "react";
  type ComponentType = string;
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>;
  };
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare module "gatsby-plugin-mailchimp" {
  import * as React from "react";

  type MailchimpResult = "success" | "error";

  export interface MailchimpResponse {
    result: MailchimpResult;
    msg: string;
  }

  export interface MailchimpFields {
    [key: string]: string;
  }

  function addToMailchimp(
    email: String,
    listFields?: MailchimpFields
  ): Promise<MailchimpResponse>;
  export default addToMailchimp;
}

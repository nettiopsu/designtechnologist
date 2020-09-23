declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "@mdx-js/react" {
  import { ComponentType, StyleHTMLAttributes } from "react";
  type MDXProps = {
    children: React.ReactNode;
    components?: { wrapper: React.ReactNode };
  };
  export class MDXProvider extends React.Component<MDXProps> {}
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

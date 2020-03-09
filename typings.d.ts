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

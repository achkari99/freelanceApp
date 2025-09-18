declare module '*.mdx' {
  import { ReactElement } from 'react';
  export const post: {
    title: string;
    description: string;
    date: string;
    [key: string]: any;
  };
  const MDXComponent: (props: any) => ReactElement;
  export default MDXComponent;
}
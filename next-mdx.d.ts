declare module '*.mdx' {
  import { ReactElement } from 'react';
  export const post: {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    tags: string[];
  };
  const MDXComponent: (props: any) => ReactElement;
  export default MDXComponent;
}
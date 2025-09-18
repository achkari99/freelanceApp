declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { BackstagePostSummary } from '@/types/post';
  import type { ProjectSummary } from '@/types/project';

  export const post: BackstagePostSummary;
  export const project: ProjectSummary;

  const MDXComponent: ComponentType;
  export default MDXComponent;
}

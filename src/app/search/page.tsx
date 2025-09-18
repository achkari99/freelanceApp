import { Suspense } from 'react';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import { backstageSummaries } from 'content/backstage';
import { projectSummaries } from 'content/work';
import { SearchPageContent } from './search-page-content';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search case studies, services, and backstage notes across Resonant Studio.'
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-sm text-slate-500 dark:text-slate-400">Loading search tools...</p>
        </div>
      }
    >
      <SearchPageContent
        projects={projectSummaries}
        backstagePosts={backstageSummaries}
        services={services}
      />
    </Suspense>
  );
}

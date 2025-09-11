'use client';

import { useEffect } from 'react';
import { trackProjectView } from '@/lib/analytics';

interface ProjectAnalyticsProps {
  projectName: string;
  categoryName: string;
  projectSlug: string;
}

export function ProjectAnalytics({ projectName, categoryName, projectSlug }: ProjectAnalyticsProps) {
  useEffect(() => {
    if (categoryName) {
      trackProjectView(projectName, categoryName, projectSlug);
    }
  }, [projectName, categoryName, projectSlug]);

  return null; // This component doesn't render anything
}

// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-KJ0ZS3E4DV';

/**
 * Track page view with custom dimensions
 */
export function trackPageView(pagePath: string, pageTitle?: string, customDimensions?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
      ...customDimensions
    });
  }
}

/**
 * Track project category selection
 */
export function trackProjectCategory(categoryName: string, projectName?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_category_view', {
      event_category: 'engagement',
      event_label: categoryName,
      project_category: categoryName,
      project_name: projectName,
      custom_parameter_1: categoryName
    });
  }
}

/**
 * Track project page view with category
 */
export function trackProjectView(projectName: string, categoryName: string, projectSlug: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_view', {
      event_category: 'engagement',
      event_label: projectName,
      project_category: categoryName,
      project_name: projectName,
      project_slug: projectSlug,
      custom_parameter_1: categoryName
    });
  }
}

/**
 * Track category filter selection
 */
export function trackCategoryFilter(categoryName: string, isAllCategories: boolean = false) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'category_filter', {
      event_category: 'engagement',
      event_label: isAllCategories ? 'All Categories' : categoryName,
      project_category: isAllCategories ? 'All Categories' : categoryName,
      custom_parameter_1: isAllCategories ? 'All Categories' : categoryName
    });
  }
}

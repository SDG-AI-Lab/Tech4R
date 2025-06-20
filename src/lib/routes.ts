/**
 * Type-safe route definitions for the application
 */
export const routes = {
  home: '/',
  about: '/about',
  projects: '/projects',
  volunteers: '/volunteers',
  events: '/events',
  contact: '/contact',
  partnerWithUs: '/partner-with-us',
  pillars: '/pillars-of-action',
} as const;

/**
 * Type for all valid route keys
 */
export type RouteKey = keyof typeof routes;

/**
 * Type for all valid route paths
 */
export type RoutePath = typeof routes[RouteKey];

/**
 * Helper function to get a route path with type safety
 */
export function getRoute(key: RouteKey): RoutePath {
  return routes[key];
}

/**
 * Helper function to check if a path is a valid route
 */
export function isValidRoute(path: string): path is RoutePath {
  return Object.values(routes).includes(path as RoutePath);
}

/**
 * Creates a path for a single project.
 * @param slug The project slug.
 * @returns The path to the project detail page.
 */
export function getProjectDetailRoute(slug: string): string {
  return `${routes.projects}/${slug}`;
}

/**
 * Navigation configuration using type-safe routes
 */
export const navigationRoutes = {
  main: [
    { label: 'About', href: routes.about },
    { label: 'Projects', href: routes.projects },
    { label: 'Volunteers', href: routes.volunteers },
    { label: 'Events', href: routes.events },
    { label: 'Partner With Us', href: routes.partnerWithUs },
  ],
  footer: {
    navigation: [
      { label: 'About', href: routes.about },
      { label: 'Contact us', href: routes.contact },
    ],
    ourWork: [
      { label: 'Pillars of Action', href: routes.pillars },
      { label: 'Projects & Solutions', href: routes.projects },
      { label: 'Volunteers', href: routes.volunteers },
      { label: 'Events', href: routes.events },
      { label: 'Partner With Us', href: routes.partnerWithUs },
    ],
  },
  actions: {
    contact: routes.contact,
    volunteer: routes.volunteers,
  },
} as const; 
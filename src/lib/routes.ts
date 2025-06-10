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
 * Navigation configuration using type-safe routes
 */
export const navigationRoutes = {
  main: [
    { label: 'About', href: routes.about },
    { label: 'Projects', href: routes.projects },
    { label: 'Volunteers', href: routes.volunteers },
    { label: 'Events', href: routes.events },
    { label: 'Partner with Us', href: routes.partnerWithUs },
  ],
  footer: {
    navigation: [
      { label: 'About', href: routes.about },
      { label: 'Contact us', href: routes.contact },
    ],
    ourWork: [
      { label: 'Pillars of action', href: routes.pillars },
      { label: 'Projects & solutions', href: routes.projects },
      { label: 'Volunteers', href: routes.volunteers },
      { label: 'Events', href: routes.events },
      { label: 'Partner with us', href: routes.partnerWithUs },
    ],
  },
  actions: {
    contact: routes.contact,
    volunteer: routes.volunteers,
  },
} as const; 
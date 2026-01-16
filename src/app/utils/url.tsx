export const ROUTES = {
  Home: "/",

  AreaGuide: "/area-guide",
  Developers: "/developers",
  Services: "/services",
  About: "/about",
  Properties: "/properties",
  Careers: "/careers",
  Blog: "/blog",
  News: "/news",
  Privacy: "/privacy-policy",
  TermCondition: "/term-condition",
  Projects: "/project.html",
  ContactUs: "/contact-us",
  
  "All Projects": "/project.html",

  "Main Home": "/",
  "Modern Home": "/modern",
  "Classic Home": "/classic",
  "Area Guide": "/area-guide",
  "Our Team": "/team",

  Downtown: "/areas/downtown",
  Waterfront: "/areas/waterfront",
  Suburban: "/areas/suburban",

  // Developers
  "Top Developers": "/developers/top",
  "All Developer": "/developers",
  "Boutique Developers": "/developers/boutique",
  International: "/developers/international",

  // Services
  "Property Management": "/services/property-management",
  "Investment Consulting": "/services/investment-consulting",
  "Legal Services": "/services/legal-services",

  // About
  "Our Story": "/about#story",
  Team: "/about/team",
  Testimonials: "/about/testimonials",
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Simple slugify fallback for unknown names */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Create a URL by name from ROUTES. Falls back to /{slugified-name} if not mapped.
 * - locale: optional locale prefix (e.g., 'en', 'cz')
 * - params: replaces :param in the path
 * - query:  appends ?key=value pairs
 */
export function createPageUrl(
  name: RouteKey | string,
  options?: {
    locale?: string;
    params?: Record<string, string | number>;
    query?: Record<string, string | number | boolean>;
  }
): string {
  const locale = options?.locale;
  const params = options?.params;
  const query = options?.query;

  const base =
    (name as RouteKey) in ROUTES
      ? ROUTES[name as RouteKey]
      : `/${slugify(String(name))}`;

  // Replace :params in the path if provided
  let path = base;
  if (params) {
    path = path.replace(/:([A-Za-z0-9_]+)/g, (_, key: string) =>
      params[key] !== undefined ? String(params[key]) : `:${key}`
    );
  }

  // Append query string if provided
  if (query && Object.keys(query).length) {
    const qs = new URLSearchParams(
      Object.entries(query).reduce<Record<string, string>>((acc, [k, v]) => {
        acc[k] = String(v);
        return acc;
      }, {})
    ).toString();
    path += `?${qs}`;
  }

  // Add locale prefix if provided
  if (locale) {
    // Don't add locale if path already starts with it
    if (!path.startsWith(`/${locale}/`) && path !== `/${locale}`) {
      path = `/${locale}${path}`;
    }
  }

  return path;
}

/**
 * Helper function to create localized URLs with current locale
 * Use this in components where you have access to locale
 */
export function createLocalizedUrl(
  name: RouteKey | string,
  locale: string,
  options?: {
    params?: Record<string, string | number>;
    query?: Record<string, string | number | boolean>;
  }
): string {
  return createPageUrl(name, {
    locale,
    params: options?.params,
    query: options?.query,
  });
}

/**
 * Extract locale from pathname
 * Returns the locale if found, otherwise null
 */
export function getLocaleFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/(en|cs)(\/|$)/);
  return match ? match[1] : null;
}

/**
 * Remove locale from pathname
 * Returns pathname without locale prefix
 */
export function removeLocaleFromPath(pathname: string): string {
  return pathname.replace(/^\/(en|cz)/, '') || '/';
}

/**
 * Check if a pathname has a locale prefix
 */
export function hasLocalePrefix(pathname: string): boolean {
  return /^\/(en|cz)(\/|$)/.test(pathname);
}

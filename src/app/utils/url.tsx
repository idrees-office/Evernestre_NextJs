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

  // Example param route (uncomment if you need it)
  // 'Property Details': '/properties/:id',
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
 * - params: replaces :param in the path
 * - query:  appends ?key=value pairs
 */
export function createPageUrl(
  name: RouteKey | string,
  params?: Record<string, string | number>,
  query?: Record<string, string | number | boolean>
): string {
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

  return path;
}

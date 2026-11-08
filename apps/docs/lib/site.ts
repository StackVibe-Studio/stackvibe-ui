export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function toSiteHref(href: string) {
  if (!href) return href;

  if (
    href.startsWith('#') ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('//')
  ) {
    return href;
  }

  if (siteBasePath && (href === siteBasePath || href.startsWith(`${siteBasePath}/`))) {
    return href;
  }

  if (href === '/') {
    return siteBasePath || '/';
  }

  return `${siteBasePath}${href.startsWith('/') ? href : `/${href}`}`;
}

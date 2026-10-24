export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxejewels.com";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

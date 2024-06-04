export const toURL = (str: string): string | null => {
  let href = str.trim();
  const reg = /(^\w+:|^)\/\//;

  if (!href) return null;

  if (!reg.test(href)) {
    href = "https://" + href;
  }

  return href;
};

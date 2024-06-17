export const trunk = (str: string, length: number): string => {
  return str.length > length ? `${str.slice(0, length)}...` : str;
};

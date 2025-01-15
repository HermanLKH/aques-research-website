export const truncate = (input: string) =>
  input?.length > 30 ? `${input.substring(0, 30)}...` : input;

export const deduplicateBy = <T, K extends keyof T>(items: T[], key: K): T[] => {
  const seen = new Set();
  return items.filter((item) => {
    const val = item[key];
    if (seen.has(val)) {
      return false;
    }
    seen.add(val);
    return true;
  });
};
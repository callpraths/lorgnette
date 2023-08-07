/**
 * Utility function to parse Unix timestamp from string.
 */
export const parseTimestamp = (value: string | null): Date | undefined => {
  if (value === null) {
    return undefined;
  }
  const timestamp = Number(value);
  if (Number.isNaN(timestamp)) {
    return undefined;
  }
  return new Date(timestamp);
};

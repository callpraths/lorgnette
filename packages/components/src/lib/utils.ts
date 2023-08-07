export const nonEmptyStringOrDefault = (
  value: string | null | undefined,
  defaultValue: string
) => (value && value.length > 0 ? value : defaultValue);

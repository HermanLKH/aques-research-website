export const truncate = (input: string) =>
  input?.length > 30 ? `${input.substring(0, 30)}...` : input;
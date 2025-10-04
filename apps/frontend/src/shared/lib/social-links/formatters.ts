export const extractTextFromBrackets = (input: string): string | undefined => {
  const match = input.match(/\[([^[\]]+)\]/);
  return match ? match[1] : undefined;
};

export const clearBrackets = (input: string): string => {
  return input
    .replace(/\([^)]+\)/g, '')
    .replace(/\[[^\]]+\]/g, '')
    .trim();
};

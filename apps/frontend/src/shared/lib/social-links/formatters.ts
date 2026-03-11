export function extractTextFromBrackets(input: string): string | undefined {
  const match = input.match(/\[([^[\]]+)\]/);
  return match ? match[1] : undefined;
}

/** Избавляется только от () и [] */
export function clearBrackets(input: string): string {
  return input
    .replace(/\([^)]+\)/g, '')
    .replace(/\[[^\]]+\]/g, '')
    .trim();
}

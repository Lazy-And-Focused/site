export interface ParseOptions {
  generateId?: (link: string, index: number) => string;
  specialAttributes?: string[];
}
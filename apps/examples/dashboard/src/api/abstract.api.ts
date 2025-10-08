export const METHODS = [
  "post",
  "put",
  "delete"
] as const;

export type Parameters = {
  "post": [string],
  "put": [string, string],
  "delete": [string]
};

export const PARAMETERS = {
  post: ["text"] as const,
  put: ["id", "text"] as const,
  delete: ["id"] as const
} as const;

export type Methods = {
  [P in (typeof METHODS)[number]]: (...data: Parameters[P]) => Promise<void>;
};

export abstract class Api implements Methods {
  public abstract readonly maxTextLength: number;

  public abstract post(text: string): Promise<void>;
  public abstract put(id: string, text: string): Promise<void>;
  public abstract delete(id: string): Promise<void>;
}

export default Api;

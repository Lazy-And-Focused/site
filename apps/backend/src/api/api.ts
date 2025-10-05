export const METHODS = [
  "post",
  "put",
  "delete"
] as const;

export type Parameters = {
  post: {
    text: string
  },

  put: {
    id: string,
    text: string
  },

  delete: {
    id: string
  }
};

export type Methods = {
  [P in (typeof METHODS)[number]]: (data: Parameters[P]) => Promise<unknown>;
};

export abstract class Api implements Methods {
  public abstract readonly maxTextLength: number;

  public abstract post(data: { text: string }): Promise<unknown>;
  public abstract put(data: { id: string, text: string }): Promise<unknown>;
  public abstract delete(data: {id: string}): Promise<unknown>;
}

export default Api;

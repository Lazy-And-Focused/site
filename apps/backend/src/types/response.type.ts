export type ServiceResponse<T, K = null> =
  | {
      successed: true;
      data: T;
      error: null;
    }
  | {
      successed: false;
      data: K | null;
      error: string;
    };

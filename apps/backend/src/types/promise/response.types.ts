import type { ServiceResponse as IServiceResponse } from "../response.types";

export type ServiceResponse<T, K = null> = Promise<IServiceResponse<T, K>>;

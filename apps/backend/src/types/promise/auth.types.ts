import type { Auth as IAuth, AuthTypes as IAuthTypes } from "../auth.types";

export { AUTH_TYPES } from "../auth.types";

export type Auth = Promise<IAuth>;
export type AuthTypes = Promise<IAuthTypes>;

import ErrorConstructor from "../constructor";

export const AUTH_ERROR_PREFIX = "User blocked";

export const AUTH_ERRORS = {
  HASH_PARSE: "Hash parse error",
  USER_NOT_FOUND: "User not found",
  PROFILE_ID_ERROR: "Profile id is not equals",
  PROFILE_NOT_FOUND: "Profile not found",
  TOKEN_ERROR: "Token is not equals",
} as const;

export default new ErrorConstructor(AUTH_ERROR_PREFIX, AUTH_ERRORS).execute();

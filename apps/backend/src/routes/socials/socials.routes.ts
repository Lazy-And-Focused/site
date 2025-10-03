const ROUTE = "socials";

const ROUTES = {
  GET_SOCIALS: "/",

  POST_SOCIAL: "/:social",
  
  PUT_SOCIAL: "/:social",
  PATCH_SOCIAL: "/:social",

  DELETE_SOCIAL: "/:social",
} as const;

export { ROUTE, ROUTES };

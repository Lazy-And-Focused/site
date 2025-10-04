const ROUTE = "socials";

const ROUTES = {
  GET_SOCIALS: "/",

  POST_SOCIAL: "/:social",
  
  PUT_SOCIAL: "/:social/:id",

  DELETE_SOCIAL: "/:social/:id",
} as const;

export { ROUTE, ROUTES };

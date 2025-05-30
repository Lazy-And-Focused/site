const ROUTES = {
  GET_ALL: "/",
  GET_ONE: "/:name",

  POST: "/",
  PUT: "/:name",
  DELETE: "/:name"
} as const;

const ROUTER = "/members/" as const;

export {
  ROUTER, ROUTES
};
const ROUTES = {
  GET_ALL: "/",
  GET_ONE: "/:name"
} as const;

const QUERY = {
  GET: ["length", "offset"] as const
} as const;

const ROUTER = "/news/" as const;

export {
  ROUTER, ROUTES, QUERY
};
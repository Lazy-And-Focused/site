export const APP_BASE_ROUTES = {
  home: "/",
  landing: "/",
  about: "/team",
  projects: "/projects",
  project: "/projects/:id",
  team: "/team",
  member: "/team/:id",
};

export const APP_ADMIN_ROUTES= {
    dashboard: '/admin'
};

export const APP_ROUTES = {
  ...APP_BASE_ROUTES,
  ...APP_ADMIN_ROUTES,
};

export const AUTH_TYPES = ["google"] as const;
export type AuthTypes = (typeof AUTH_TYPES)[number];

export interface Auth {
  id: string;

  profile_id: string;
  service_id: string;

  access_token: string;
  refresh_token: string;

  created_at: string;
  type: AuthTypes;
}

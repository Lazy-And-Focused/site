export interface User {
  created_at: string,
  id: string,
  services: Record<string, { avatar_urL: string, nickname: string }>,
  username: string
}
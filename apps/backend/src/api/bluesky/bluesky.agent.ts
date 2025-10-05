import { AtpAgent } from '@atproto/api'

import env from '@env';

export const agent = new AtpAgent({
  service: "https://bsky.social"
});

export const login = async () => {
  const data = await agent.login({
    identifier: env.BLUESKY_USERNAME,
    password: env.BLUESKY_PASSWORD,
  });

  console.log((data.success
    ? "Получилось"
    : "Не получилось"
  ) + " подключиться к агенту Bluesky");

  return data;
}


export default agent;
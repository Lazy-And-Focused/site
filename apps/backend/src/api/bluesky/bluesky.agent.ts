import { AtpAgent } from '@atproto/api'

import env from '@env';

export const agent = new AtpAgent({
  service: "https://bsky.social"
});

export const login = async () => {
  return await agent.login({
    identifier: env.BLUESKY_USERNAME,
    password: env.BLUESKY_PASSWORD
  });
}


export default agent;
'use server'

import { cookies } from "next/headers";
import { cache } from "react";

export const isInWhiteList = cache(async () => {
  const cookie = await cookies();
  const user = cookie.get("user");

  if (!user) {
    return false;
  };

  if (!process.env.WHITE_LIST) {
    return false;
  }

  const { username } = JSON.parse(user.value);

  return process.env.WHITE_LIST.split(",").includes(username);
});

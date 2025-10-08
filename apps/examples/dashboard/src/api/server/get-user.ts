'use server'

import type { User } from "types/user.type";

import { cookies } from "next/headers";
import { cache } from "react";

export const getUser = cache(async (): Promise<User|null> => {
  const cookie = await cookies();

  const token = cookie.get("auth");
  
  if (!token) {
    return null;
  };

  const { data: user } = await fetch("http://localhost:3001/api/users/@me", {
    method: "GET",
    headers: {
      authorization: "Bearer " + token.value,
    },
    next: {
      revalidate: 300
    }
  }).then(data => data.json());

  cookie.set("user", JSON.stringify(user));

  return user;
});

export const getUserByCode = async (code: string): Promise<User> => {
  const cookie = await cookies();
  const withoutCode = await getUser();

  if (withoutCode) {
    return withoutCode;
  }

  const { auth, user } = await fetch("http://localhost:8080/api/auth/@me?code="+code, {
    method: "GET",
  }).then(data => data.json());

  cookie.set("auth", JSON.stringify(auth));
  cookie.set("user", JSON.stringify(user));

  return user;
};

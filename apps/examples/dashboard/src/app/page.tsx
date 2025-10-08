'use client'

import type { User } from "types/user.type";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getUser, getUserByCode } from "../api/server/get-user";

import styles from "./page.module.css";

const Page = () => {
  const searchParams = useSearchParams();

  const [ user, setUser ] = useState<User>();

  useEffect(() => {
    const code = searchParams.get("code");
    
    (async () => {
      if (!code) {
        return;
      }

      const user = await getUser();

      if (user) {
        setUser(user);
        return;
      }

      const gettedUser = await getUserByCode(code);
      setUser(gettedUser);

      if (gettedUser) {
        location.href = "/";
      }
    })();
  }, []);
  
  return (
    <div className={styles.main}>
      <span>
        Привет, это панель управления для новостей, перейдите по ссылке ниже,
        чтобы начать управление! Удачи :)
      </span>

      {
        !user
          ? (
            <a href="http://localhost:8080/api/auth/google?callback=http://localhost:3000">
              Хотите зарегистрироваться?
            </a>
          ) : (
            <span>Рады приветствовать Вас, {user.username}</span>
          )
      }
      
    </div>
  );
}

export default Page;

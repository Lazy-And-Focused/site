'use client'

import { useState, useRef } from "react";
import { NEWS_API_OBJECT, NEWS_API_VARIANTS } from "../api/constants";

import styles from "./page.module.css";

const Page = () => {
  const [ choosedApi, setChoosedApi ] = useState<string>(NEWS_API_VARIANTS[0]);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const chooseApi = (api: string) => {
    setChoosedApi(api);

    if (!textRef.current) {
      return;
    };

    const exceedsMaxLength = textRef.current.value.length > NEWS_API_OBJECT[choosedApi].maxTextLength
    if (!exceedsMaxLength) {
      return;
    };

    alert("Вы переключились на другую соцсеть, у вас превышен лимит букв");
  };

  const post = () => {
    if (!textRef.current) {
      return;
    }

    const api = choosedApi;
    const text = textRef.current.value;

    console.log({api, text});
  }

  return (
    <div className="page-center">
      <div className={styles.settings}>
        <section className={styles.socials}>
          <h2>Соцсеть</h2>

          <div className={styles.variants}>
            <span>
              Выберите вариант: (сейчас: {choosedApi})
            </span>
  
            <div className={styles.variants_to_choose}>
              {
                NEWS_API_VARIANTS
                  .filter(api => choosedApi !== api)
                  .map(api =>
                    <button
                      key={api}
                      onClick={() => chooseApi(api)}
                    >
                      {api}
                    </button>
                  )
              }
            </div>
          </div>
        </section>

        <section className={styles.text}>
          <h2>Текст</h2>

          <textarea
            name="text"
            id="text"
            ref={textRef}
            maxLength={NEWS_API_OBJECT[choosedApi].maxTextLength}
            placeholder={`Напишите сюда свой текст для ${choosedApi}`}
          ></textarea>
        </section>

        <button onClick={post}>Submit</button>
      </div>
    </div>
  )
}

export default Page;

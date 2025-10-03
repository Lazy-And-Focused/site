'use client'

import { useState } from "react";
import { NEWS_API_OBJECT, NEWS_API_VARIANTS } from "../api/constants";

import styles from "./page.module.css";

const Page = () => {
  const [ choosedApi, setChoosedApi ] = useState<string>(NEWS_API_VARIANTS[0]);

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
                      onClick={() => setChoosedApi(api)}
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
            maxLength={NEWS_API_OBJECT[choosedApi].maxTextLength}
            placeholder={`Напишите сюда свой текст для ${choosedApi}`}
          ></textarea>
        </section>
      </div>
    </div>
  )
}

export default Page;

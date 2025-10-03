'use client'

import { useState, useRef, JSX } from "react";
import { chooseApiParametersByMethod, NEWS_API_OBJECT, NEWS_API_VARIANTS } from "../api/constants";

import styles from "./page.module.css";
import { METHODS, PARAMETERS } from "../api/abstract.api";

const Page = () => {
  const [ choosedApi, setChoosedApi ] = useState<string>(NEWS_API_VARIANTS[0]);
  const [ choosedMethod, setChoosedMethod ] = useState<(typeof METHODS)[number]>("post");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const parameters = chooseApiParametersByMethod(choosedMethod);

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

  const idSection = (
    <section className={styles.id}>
      <h2>Идентификтор</h2>

      <input
        type="text"
        id="id"
        name="id"
        placeholder="Введите id поста/сообщения"
      />
    </section>
  );

  const textSection = (
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
  );

  const sections: Record<((typeof PARAMETERS)[keyof typeof PARAMETERS])[number], JSX.Element> = {
    id: idSection,
    text: textSection
  };

  return (
    <div className="page-center">
      <div className={styles.settings}>
        <section className={styles.socials}>
          <h2>Соцсеть</h2>

          <div className={styles.variants}>
            <span>
              Выбранные варианты: {choosedApi} и {choosedMethod}
            </span>
            <span>
              Выберите вариант:
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
            <div className={styles.variants_to_choose}>
              {
                METHODS
                  .filter(method => choosedMethod !== method)
                  .map(method =>
                    <button
                      key={method}
                      onClick={() => setChoosedMethod(method)}
                    >
                      {method}
                    </button>
                  )
              }
            </div>
          </div>
        </section>

        {parameters.map(parameter => sections[parameter])}

        <button onClick={post}>Submit</button>
      </div>
    </div>
  )
}

export default Page;

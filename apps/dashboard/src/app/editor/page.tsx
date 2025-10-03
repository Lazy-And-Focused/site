'use client'

import { useState } from "react";
import { NEWS_API_VARIANTS } from "../api/constants";

const Page = () => {
  const [ choosedApi, setChoosedApi ] = useState<string>(NEWS_API_VARIANTS[0]);

  return (
    <div className="page-center">
      <section>
        <h2>Соцсеть</h2>

        <span>
          Выбранный вариант: {choosedApi}
        </span>
        
        <div>
          Выберить вариант:
          {
            NEWS_API_VARIANTS.map(api =>
              <button
                key={api}
                onClick={() => setChoosedApi(api)}
              >
                {api}
              </button>
            )
          }
        </div>
      </section>

      <section>
        <h2>Текст</h2>

        <textarea name="text" id="text"></textarea>
      </section>
    </div>
  )
}

export default Page;

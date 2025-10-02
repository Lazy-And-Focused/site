'use client'

import { useState } from "react";
import { NEWS_API_VARIANTS } from "../api/constants";

const Page = () => {
  const [ choosedApi, setChoosedApi ] = useState<string>(NEWS_API_VARIANTS[0]);

  return (
    <div>
      Выбранный вариант: {choosedApi}
      <br />
      Выберить вариант:
      {
        NEWS_API_VARIANTS.map(api =>
          <button
            key={api}
            onClick={() => setChoosedApi(api)}
          >
            {api}
          </button>)
      }
    </div>
  )
}

export default Page;

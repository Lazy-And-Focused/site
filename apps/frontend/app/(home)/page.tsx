import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center bg-sidebar min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] text-center row-start-2 items-center">
          <h1 className="text-xl font-bold">Сайт команды LAF</h1>
          <p>И всё, да. Просто редизайн и много чего ещё.</p>
        </div>
      </section>

      <section className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] text-center row-start-2 items-center">
          <h2 className="text-xl font-bold">Сайт в актиной разработке</h2>
          <p>
            Помочь вы можете перейдя сюда в наши социальные сети
            <br />
            (в подвале сайта)
          </p>
        </div>
      </section>
    </main>
  );
}

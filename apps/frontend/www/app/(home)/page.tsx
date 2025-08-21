import HeartSVG from "./_ui/heart";

export default function Home() {
  return (
    <main>
      <section className="font-sans flex items-center justify-center bg-sidebar min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] text-center text-primary row-start-2 items-center">
          <HeartSVG />
          <h1 className="text-6xl font-heading font-medium">
            Разработка с LAF
          </h1>
          <p>
            Lazy And Focused и печеньки с котиками за просмотром новеньких
            сериалов.
          </p>
        </div>
      </section>

      <section className="font-sans flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
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

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] text-center row-start-2 items-center">
        <h1 className="text-xl font-bold">Сайт команды LAF</h1>
        <p>И всё, да. Просто редизайн и много чего ещё.</p>
      </main>
    </div>
  );
}

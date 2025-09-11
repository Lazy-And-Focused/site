import type { Tab } from '../shared/components/browser';

import { useEffect, useState } from 'react';
import { Browser } from '../shared/components/browser';

type GitHubRepository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
};

const projects: GitHubRepository[] = await fetch(
  'https://api.github.com/orgs/Lazy-And-Focused/repos',
  {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  },
)
  .then((res) => res.json())
  .catch(() => []);

const Projects = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    setTabs(
      projects.map((project) => ({
        id: project.id,
        name: project.name,
        favicon: '/images/logo.png',
        element: project.description || 'У этого репозитория нет описания',
      })),
    );
  }, []);

  return (
    <main className='h-full w-full'>
      <section className='flex min-h-screen w-full flex-col items-center justify-center bg-[#418d76] bg-[url("/images/background.png")] bg-cover bg-center bg-no-repeat px-6 pt-14 shadow-xl dark:bg-[#205848] dark:bg-none lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 pt-16 sm:pt-12'>
          <div className='text-center'>
            <h1 className='mb-8 text-balance text-5xl font-semibold tracking-tight text-slate-100 drop-shadow-md sm:text-7xl'>
              Сделано с LAF
            </h1>

            <Browser tabs={tabs}>Выбери любой проект из списка выше</Browser>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;

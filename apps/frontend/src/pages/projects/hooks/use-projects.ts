import type { BrowserTab } from '../ui/browser/types';

import { useState, useEffect } from 'react';

import { ORGANIZATION_REPOSITORIES_URL } from '@shared/lib/constants';

type GitHubRepository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
};

async function getProjects(): Promise<GitHubRepository[]> {
  return fetch(ORGANIZATION_REPOSITORIES_URL, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .catch(() => []);
}

export const useProjects = () => {
  const [tabs, setTabs] = useState<BrowserTab[]>([]);
  const [errorCatched, setErrorCatched] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      const projects = await getProjects();

      if (projects.length === 0) {
        setErrorCatched(true);
        return;
      }

      setTabs(
        projects.map((project) => ({
          id: project.id,
          name: project.name,
          favicon: '/images/logo.png',
          element: project.description || 'У этого репозитория нет описания',
        })),
      );

      setLoaded(true);
    };

    fetcher();
  }, []);

  return { tabs, loaded, errorCatched };
};

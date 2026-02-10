import { useProjects } from './hooks/use-projects';

import { Browser } from './ui/browser';
import { ProjectsHero } from './ui/projects-hero';

import { PROJECTS_PAGE_CONSTANTS } from './lib/constants';

const { PLACEHOLDER, LOADING_PLACEHOLDER } = PROJECTS_PAGE_CONSTANTS.BROWSER;

const STYLE = {
  CONTAINER: 'h-full w-full',
  BROWSER_PLACEHOLDER: {
    BASE: 'mt-4 text-slate-200',
    ERROR_STATE: 'mt-4 text-rose-500',
  },
} as const;

const ProjectsPage = () => {
  const { tabs, loaded, errorCatched } = useProjects();

  const placeholder = errorCatched
    ? 'Произошла ошибка при загрузке данных'
    : !loaded
      ? LOADING_PLACEHOLDER
      : PLACEHOLDER;

  const browserPlaceholderCalculatedStyle = !errorCatched
    ? STYLE.BROWSER_PLACEHOLDER.BASE
    : STYLE.BROWSER_PLACEHOLDER.ERROR_STATE;
  return (
    <main className={STYLE.CONTAINER}>
      <ProjectsHero>
        <Browser tabs={tabs}>
          <div className={browserPlaceholderCalculatedStyle}>{placeholder}</div>
        </Browser>
      </ProjectsHero>
    </main>
  );
};

export default ProjectsPage;

import { useProjects } from './hooks/use-projects';

import { Browser } from './ui/browser';
import { ProjectsHero } from './ui/projects-hero';

import { PROJECTS_PAGE_CONSTANTS } from './lib/constants';

const { PLACEHOLDER, LOADING_PLACEHOLDER } = PROJECTS_PAGE_CONSTANTS.BROWSER;

const ProjectsPage = () => {
  const { tabs, loaded, errorCatched } = useProjects();

  const placeholder = errorCatched
    ? 'Произошла ошибка при загрузке данных'
    : !loaded
      ? LOADING_PLACEHOLDER
      : PLACEHOLDER;

  const placeholderColorStyle = errorCatched ? 'text-rose-500' : 'text-slate-200';

  return (
    <main className='h-full w-full'>
      <ProjectsHero>
        <Browser tabs={tabs}>
          <div className={`mt-4 ${placeholderColorStyle}`}>{placeholder}</div>
        </Browser>
      </ProjectsHero>
    </main>
  );
};

export default ProjectsPage;

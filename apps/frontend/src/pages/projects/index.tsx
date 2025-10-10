import { Browser } from './ui/browser';
import { ProjectsHero } from './ui/projects-hero';

import { useProjects } from './hooks/use-projects';

import { PROJECTS_PAGE_CONSTANTS } from './lib/constants';

const placeholder = PROJECTS_PAGE_CONSTANTS.BROWSER.EMPTY_TEXT;
const loadingPlaceholder = <div className='mt-4 text-slate-200'>Загрузка проектов...</div>;

const ProjectsPage = () => {
  const { tabs, loaded } = useProjects();

  return (
    <main className='h-full w-full'>
      <ProjectsHero>
        <Browser tabs={tabs}>{!loaded ? loadingPlaceholder : placeholder}</Browser>
      </ProjectsHero>
    </main>
  );
};

export default ProjectsPage;

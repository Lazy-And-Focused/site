import { Browser } from './ui/browser';
import { ProjectsHero } from './ui/projects-hero';

import { useProjects } from './hooks/use-projects';

import { PROJECTS_PAGE_CONSTANTS } from './lib/constants';

const ProjectsPage = () => {
  const { tabs, loaded } = useProjects();

  return (
    <main className='h-full w-full'>
      <ProjectsHero>
        <Browser tabs={tabs}>{PROJECTS_PAGE_CONSTANTS.BROWSER.EMPTY_TEXT}</Browser>
        {!loaded && <div className='mt-4 text-slate-200'>Загрузка проектов...</div>}
      </ProjectsHero>
    </main>
  );
};

export default ProjectsPage;

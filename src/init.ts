import Service from "services/github.service"
import { Members } from "database/models/members.model";
import { Projects } from "database/models/projects.model";
import { DEFAULT } from "./types/project.type";

const service = new Service();

export const initializeProjects = async () => {
  const members = await Members.find();

  console.log("Инициализирую проекты.");
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (res) => {
    for (const member of members) {
      try {
        const { success, data: repos } = await service.getRepos(member.tag);
        
        console.log("Инициализирую проекты " + member.tag);
    
        if (!success || !Array.isArray(repos)) throw new Error(JSON.stringify(repos, undefined, 4));
        if (repos.length === 0) throw new Error("Репозиториев нет");
    
        console.log(repos.map(r => r.name).join("\n"));
        const projects = await service.resolveRepos(repos);
    
        for (const project of projects) {
          try {
            if (await Projects.findOne({ name: project.name })) throw new Error(`Проект ${project.name} уже сущесвует`);

            console.log("Инициализирую " + project.name);
            const p = await Projects.create({ ...DEFAULT, ...project });
            console.log(p.name + " инициализирован");
          } catch (error) {
            console.error(`Инициализация ${project.name} выдала ошибку`)
            console.error(error);
            console.log();
            console.error(project);
            continue;
          };
        }
      } catch (error) {
        console.error(error);
        continue;
      }
    };
    
    res(members);
  }).then(() => {
    console.log("Проекты были инициализированы.");
  })
}
import { DEFAULT, IProject } from "types/project.type";
import request from "./request.service";
import { IMember } from "types/member.type";

import { Members } from "database/models/members.model";

export interface User {
  "login": string,
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id": string,
  "url": string,
  "html_url": string,
  "type": string,
  "user_view_type": string,
  "site_admin": boolean,
  "contributions": number
}

export interface Repository {
  "id": number;
  "node_id": string;
  "name": string;
  "full_name": string;
  "owner": User
  "private": boolean;
  "html_url": string;
  "forks_url": string;
  "keys_url": string;
  "collaborators_url": string;
  "teams_url": string;
  "hooks_url": string;
  "issue_events_url": string;
  "events_url": string;
  "assignees_url":string;
  "branches_url": string;
  "tags_url": string;
  "blobs_url": string;
  "git_tags_url": string;
  "git_refs_url": string;
  "trees_url": string;
  "statuses_url": string;
  "languages_url": string;
  "stargazers_url": string;
  "contributors_url": string;
  "subscribers_url": string;
  "subscription_url": string;
  "commits_url": string;
  "git_commits_url": string;
  "comments_url": string;
  "issue_comment_url": string;
  "contents_url": string;
  "compare_url": string;
  "merges_url": string;
  "archive_url": string;
  "downloads_url": string;
  "issues_url": string;
  "pulls_url": string;
  "milestones_url": string;
  "notifications_url": string;
  "labels_url": string;
  "releases_url": string;
  "deployments_url": string;
  "description": string;
  "fork": boolean;
  "language": string;
  "forks_count": number;
  "stargazers_count": number;
  "watchers_count": number;
  "size": number;
  "default_branch": string;
  "open_issues_count": number;
  "is_template": boolean;
  "topics": string[];
  "has_issues": boolean;
  "has_projects": boolean;
  "has_wiki": boolean;
  "has_pages": boolean;
  "has_downloads": boolean;
  "archived": boolean;
  "disabled": boolean;
  "visibility": string;
  "pushed_at": Date;
  "created_at": Date;
  "updated_at": Date;
  "allow_rebase_merge": boolean;
  "forks": number;
  "open_issues": number;
  "watchers": number;
}

class Service {
  private readonly apiUrl = "https://api.github.com";

  public constructor() {};

  public getRepos(username: string) {
    return request<Repository[]>(this.apiUrl + "/users/" + username + "/repos");
  };

  public async resolveUser(user: User): Promise<IMember> {
    const   member = await Members.findOne({ tag: user.login.toLowerCase() });
  
    return <IMember>{
      name: member?.name || user.login,
      description: member?.description || "",
      role: member?.role || "lafer",
      socials: member?.socials || [{
        href: user.url
      }],
      tag: member?.tag || user.login.toLowerCase(),
      avatar: member?.avatar || user.avatar_url,
      meta: member?.meta || ""
    };
  }

  public async resolveUsers(users: User[]): Promise<IMember[]> {
    const members: IMember[] = [];

    for (const user of users) {
      members.push(await this.resolveUser(user));
    }

    return members;
  }

  public async resolveRepos(repos: Repository[]): Promise<IProject[]> {
    const resolvedRepos: IProject[] = [];
    
    for (const repo of repos) {
      const { success, data } = await request<User[]>(repo.contributors_url);

      if (!success) continue;

      const author = await this.resolveUser(repo.owner);
      const contributors = await this.resolveUsers(data);

      resolvedRepos.push({
        ...DEFAULT,
        name: repo.full_name,
        author, contributors,
        description: repo.description || "",
        cover: "",
        urls: [{
          href: repo.html_url
        }],
        icon_url: ""
      })
    }

    return resolvedRepos;
  }
};

export { Service };

export default Service;

import type { BaseMember, Member } from '../entity';

import { parseSocialLinks } from '@shared/lib/social-links';

/**
 * Необработанные данные участников команды
 */
export const BASE_TEAM_MEMBERS: BaseMember[] = [
  {
    tag: 'fockusty',
    name: 'FOCKUSTY',
    roles: ['CEO', 'Backend-разработчик'],
    avatar: 'https://github.com/fockusty.png',
    description:
      'Увлечённый backend-разработчик с опытом построения отказоустойчивых и масштабируемых серверных приложений. Глубоко погружён в архитектуру API, оптимизацию баз данных, асинхронную обработку. При этом имею компетенции во фронтенд-разработке, что позволяет мне эффективно выстраивать взаимодействие между клиентом и сервером и создавать полноценные full-stack решения',
    socials: [
      '(personal) https://fockusty.netlify.app/',
      'https://github.com/fockusty',
      'https://gravatar.com/fockusty',
      'https://www.youtube.com/channel/UCONoOdImtgCZKih1nxDjxDg',
      'https://vk.com/fockusty',
      'https://t.me/FOCKUSTY',
      'https://twitch.tv/FOCKUSTY',
      'https://steamcommunity.com/profiles/76561198999835541/',
      'https://twitter.com/fockusty',
      'https://pinterest.com/fockusty/',
    ],
  },
  {
    tag: 'lanvalird',
    name: 'Valentin Bird',
    roles: ['Team Lead', 'Frontend-разработчик'],
    avatar: 'https://github.com/lanvalird.png',
    description:
      'Привет! Я интересовался программированием с 11 лет, а уже в 13 начал изучать свой первый язык — PHP. В данный момент занимаюсь веб-разработкой около 4 лет (с середины 2021 года).\nПрограммирование для меня — не просто очередное хобби, а самая настоящая работа.\nКстати, про хобби: музыка, разработка, дизайн сайтов, документирование и рисование.',
    socials: [
      '(personal) https://lanvalird.ru/',
      'https://github.com/lanvalird',
      'https://gravatar.com/lanvalird',
      'https://t.me/lanvalird',
      'https://vk.com/lanvalird',
      'https://pinterest.com/acula_1/',
      'https://twitch.tv/acula_1',
      'https://tiktok.com/@acula_1',
    ],
  },
  {
    tag: 'omonillo',
    name: 'Омонилло',
    roles: ['Художник', 'Промоутер'],
    avatar: '/images/avatars/omonillo.webp',
    description:
      'Меня зовут Азамжанов Омонилло, а с остальными разработчиками вы, скорее всего, уже познакомились.\nМы активно работаем над проектами, которые позволяют нам улучшить наши навыки и применить полученные знания на практике.',
    meta: ['no-gh'],
  },
  {
    tag: 'beyz1k',
    name: 'beyz1k',
    roles: ['Промоутер'],
    avatar: 'https://github.com/beyz1k.png',
    description:
      'Всем привет, меня зовут Эмиль. Я будущий промоутер и начинающий фронтенд-разработчик <3',
    socials: ['https://github.com/beyz1k'],
  },
];

/**
 * Обработанные данные участников команды
 */
export const TEAM_MEMBERS: Member[] = BASE_TEAM_MEMBERS.map((member) => ({
  ...member,
  socials: member.socials ? parseSocialLinks(member.socials) : [],
}));

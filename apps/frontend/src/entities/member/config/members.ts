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
      'Почему я начал изучать программирование? Всё просто: я просто начал, по приколу, да. Вот такой вот я. По состоянию на август 2024 года мне 15 лет. Мой первый язык — JavaScript. Сначала я изучал HTML и CSS (все мы знаем, что они не ЯП), а потом переключился на JS. Я нашёл своё призвание в программировании. Раньше я снимал видео на платформе YouTube, но в какой-то момент мне это надоело, и я начал изучать веб. Я начал изучать программирование с 13 лет (в июне 2023 года).',
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

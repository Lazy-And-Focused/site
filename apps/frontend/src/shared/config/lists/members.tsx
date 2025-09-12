import type { BaseMember, Member } from '../../../entities/member';

import { formatLinks } from '../../utils';

/**
 * Массив с именами пользователей GitHub, которые состоят в команде LAF.
 */
export const rawMembers: BaseMember[] = [
  {
    tag: 'fockusty',
    name: 'FOCKUSTY',
    roles: ['CEO', 'Backend-разработчик'],
    description:
      'Почему я начал изучать программирование? Всё просто, я просто начал, по приколу, да, вот такой вот я. На август 2024 года мне 15 лет. Мой первый язык - JavaScript, сначала я изучал HTML & CSS (Все мы знаем, что они не ЯП), а потом переключился на JS. Я нашел свой интерес в программировании. Раньше я снимал видео на платформу YouTube, но мне в один момент надоело и я начал изучать веб. Я начал изучать программирование с 13 лет (2023 год в июне).',
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
    tag: 'alena_viral25',
    name: 'Neex',
    roles: ['HR-менеджер'],
    avatar: '/images/avatars/alena_viral25.webp',
    description: 'Всем привет, я Кари и являюсь HR-менеджер данной команды, моё хобби — рисование',
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
    description:
      'Всем привет меня зовут Эмиль, я будущий промоутер и начинающий фронтенд-разработчик <3',
    socials: ['https://github.com/beyz1k'],
  },
  {
    tag: 'emma',
    name: 'Эмма',
    roles: ['Художница'],
    avatar: '/images/avatars/emma.webp',
    description:
      'Мой творческий псевдоним Эшми. А в команде я Эмма (Эмка). Знаете почему? Потому что только для друзей я ей являюсь.\nРисование — то, что заставляет меня жить. Это не моя профессия, не хобби, это то, что движет мной. Никогда не занималась этим профессионально, но это не мешает находиться мне в этой команде здесь и сейчас. Главное — чтобы моё творчество вдохновляло и радовало меня и окружающих, а не чтобы всё было по правилам.\nПравила конечно тоже нужны, я их тоже люблю, но считаю что в творчестве можно и нужно давать волю фантазии.',
    socials: ['https://t.me/krestikruss'],
    meta: ['no-gh'],
  },
  {
    tag: 'yonathanpower',
    name: 'Yonathan',
    roles: ['Стажёр Сценарист'],
    description:
      'Ола! Я Йонатан, в команде являюсь сценаристом, моя цель — создавать истории, которые не только развлекают, но также захватывают и затягивают в свой чудный мир.',
    socials: ['https://t.me/charlatan0', 'https://github.com/yonathanpower'],
  },
  {
    tag: 'kitiket142',
    name: 'Акула в найках',
    roles: ['Стажёр Программист'],
    avatar: '/images/avatars/kitiket142.webp',
    description:
      'Всем хай. Я Стажер - разработчик, пишу коды на python и немного на c++. В дальнейшем хочу стать Мидлом в этой команде. Моё хобби спорт и программирование.',
  },
];

export const members: Member[] = rawMembers.map<Member>((p) => ({
  ...p,
  socials: p.socials ? formatLinks(p.socials) : [],
}));

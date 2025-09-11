import type { SocialLink } from '../types';

import {
  DiscordIcon,
  GitHubIcon,
  GravatarIcon,
  PinterestIcon,
  TelegramIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  VKIcon,
  WebsiteIcon,
  YouTubeIcon,
} from '../shared/components/ui/icons';

/**
 * Массив из объектов типа SocialLink. Каждый элемент содержит href (адрес сервиса), name (имя сервиса) и icon (иконка, React-компонент)
 */
export const listSocialLinks: SocialLink[] = [
  {
    href: '(personal) ',
    name: 'Персональный сайт',
    icon: WebsiteIcon,
  },
  {
    href: '(docs) ',
    name: 'Документация',
    icon: WebsiteIcon,
  },
  {
    href: 'https://github.com/',
    name: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://gravatar.com/',
    name: 'Gravatar',
    icon: GravatarIcon,
  },
  {
    href: 'https://vk.com/',
    name: 'VK',
    icon: VKIcon,
  },
  {
    href: 'https://discord.com/invite',
    name: 'Discord',
    icon: DiscordIcon,
  },
  {
    href: 'https://discord.gg/',
    name: 'Discord',
    icon: DiscordIcon,
  },
  {
    href: 'https://t.me/',
    name: 'Telegram',
    icon: TelegramIcon,
  },
  {
    href: 'https://tiktok.com/',
    name: 'TikTok',
    icon: TikTokIcon,
  },
  {
    href: 'https://twitch.tv/',
    name: 'Twitch',
    icon: TwitchIcon,
  },
  {
    href: 'https://pinterest.com/',
    name: 'Pinterest',
    icon: PinterestIcon,
  },
  {
    href: 'https://steamcommunity.com/profiles/',
    name: 'Steam',
  },
  {
    href: 'https://patreon.com/',
    name: 'Patreon',
  },
  {
    href: 'https://boosty.to/',
    name: 'Boosty',
  },
  {
    href: 'https://twitter.com/',
    name: 'Twitter',
    icon: TwitterIcon,
  },
  {
    href: 'https://bsky.app/profile/',
    name: 'Bluesky',
  },
  {
    href: 'https://www.youtube.com/',
    name: 'YouTube',
    icon: YouTubeIcon,
  },
];
export default listSocialLinks;

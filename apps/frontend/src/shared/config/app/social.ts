import type { SocialPlatform } from '@shared/types/social';

import {
  BlueskyIcon,
  BoostyIcon,
  DiscordIcon,
  GitHubIcon,
  GravatarIcon,
  PinterestIcon,
  TelegramIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  VkIcon,
  WebsiteIcon,
  YouTubeIcon,
} from '@icons';

/**
 * Конфигурация социальных платформ для парсинга ссылок
 */
export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'website',
    name: 'Персональный сайт',
    icon: WebsiteIcon,
    prefixes: ['(personal) ', '(docs) '],
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: GitHubIcon,
    domains: ['github.com'],
  },
  {
    id: 'gravatar',
    name: 'Gravatar',
    icon: GravatarIcon,
    domains: ['gravatar.com'],
  },
  {
    id: 'vk',
    name: 'VK',
    icon: VkIcon,
    domains: ['vk.com'],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: TelegramIcon,
    domains: ['t.me'],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: YouTubeIcon,
    domains: ['youtube.com', 'youtu.be'],
  },
  {
    id: 'twitch',
    name: 'Twitch',
    icon: TwitchIcon,
    domains: ['twitch.tv'],
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: TwitterIcon,
    domains: ['twitter.com', 'x.com'],
  },
  {
    id: 'patreon',
    name: 'Patreon',
    domains: ['patreon.com'],
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    icon: PinterestIcon,
    domains: ['pinterest.com'],
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: DiscordIcon,
    domains: ['discord.com', 'discord.gg', 'discordapp.com'],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: TikTokIcon,
    domains: ['tiktok.com'],
  },
  {
    id: 'patreon',
    name: 'Patreon',
    domains: ['patreon.com'],
  },
  {
    id: 'boosty',
    name: 'Boosty',
    icon: BoostyIcon,
    domains: ['boosty.to'],
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    icon: BlueskyIcon,
    domains: ['bsky.app'],
  },
  {
    id: 'steam',
    name: 'Steam',
    domains: ['steamcommunity.com'],
  },
];

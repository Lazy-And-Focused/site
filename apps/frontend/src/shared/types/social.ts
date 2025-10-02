import type { ComponentType } from 'react';

export interface SocialPlatform {
  id: string;
  name: string;
  icon?: ComponentType<{ className?: string }>;
  prefixes?: string[];
  domains?: string[];
}

export interface SocialLink {
  id: string;
  url: string;
  platform: SocialPlatform;
  customName?: string;  
  isSpecial: boolean;
}
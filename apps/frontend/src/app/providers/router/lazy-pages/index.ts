import { lazy } from 'react';

export const HomePage = lazy(() => import('@pages/home'));
export const AboutPage = lazy(() => import('@pages/about'));
export const ProjectsPage = lazy(() => import('@pages/projects'));
export const NotFoundPage = lazy(() => import('@pages/not-found'));
export const LinksPage = lazy(() => import('@pages/links'));

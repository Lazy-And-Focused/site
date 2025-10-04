import { lazy } from 'react';

export const Home = lazy(() => import('@pages/home'));
export const About = lazy(() => import('@pages/about'));
export const Projects = lazy(() => import('@pages/projects'));
export const NotFound = lazy(() => import('@pages/not-found'));
export const Links = lazy(() => import('@pages/links'));

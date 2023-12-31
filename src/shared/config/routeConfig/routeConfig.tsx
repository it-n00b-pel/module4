import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { BlogDetails } from '@/pages/BlogDetails';
import { BlogsPage } from '@/pages/BlogsPage';
import HomePage from '@/pages/HomePage/ui/HomePage.tsx';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    HOME = 'home',
    BLOG = 'blog',
    BLOG_DETAILS = 'blog_details',
    ABOUT = 'about',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: 'module4/',
    [AppRoutes.ABOUT]: 'module4/about',
    [AppRoutes.BLOG]: 'module4/blog',
    [AppRoutes.BLOG_DETAILS]: '/module4/blog/article/',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.BLOG]: {
        path: RoutePath.blog,
        element: <BlogsPage />,
    },
    [AppRoutes.BLOG_DETAILS]: {
        path: `${RoutePath.blog_details}:id`,
        element: <BlogDetails />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <>NO FOUND</>,
    },
};

export interface SidebarItemType {
    path: string;
    text: string;
}
export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.home,
        text: 'Home',
    },
    {
        path: RoutePath.blog,
        text: 'Blog',
    },
    {
        path: RoutePath.about,
        text: 'About',
    },
];

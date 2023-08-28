import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'src/pages/AboutPage';
import { BlogsPage } from 'src/pages/BlogsPage';
import HomePage from 'src/pages/HomePage/ui/HomePage.tsx';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    HOME = 'home',
    BLOG = 'blog',
    ABOUT = 'about',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.BLOG]: '/blog/',
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

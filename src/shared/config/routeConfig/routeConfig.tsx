import { RouteProps } from 'react-router-dom';

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
        element: <>HOME</>,
    },
    [AppRoutes.BLOG]: {
        path: RoutePath.blog,
        element: <>BLOG</>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <>ABOUT</>,
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

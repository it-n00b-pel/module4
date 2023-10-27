import { memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig.tsx';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<Loader />}>
                <div>
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);

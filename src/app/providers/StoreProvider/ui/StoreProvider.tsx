import { ReactNode } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createReduxStore } from 'src/app/providers/StoreProvider/config/store.ts';
import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<AppRootStateType>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        // @ts-ignore
        initialState,
    } = props;

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

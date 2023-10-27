import { ReactNode } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import { createReduxStore } from '@/app/providers/StoreProvider/config/store.ts';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
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

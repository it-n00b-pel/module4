import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager.ts';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import { AppDispatch } from '@/app/providers/StoreProvider/types/type.ts';
import { bannerReducer } from '@/entities/Banner';
import { appReducer } from '@/pages/model';
import { articleListReducer } from '@/widgets/ArticleList';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        banner: bannerReducer,
        articlesList: articleListReducer,
        app: appReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,

        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

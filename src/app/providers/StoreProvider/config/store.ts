import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReducerManager } from 'src/app/providers/StoreProvider/config/reducerManager.ts';
import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';
import { AppDispatch } from 'src/app/providers/StoreProvider/types/type.ts';
import { bannerReducer } from 'src/entities/Banner';
import { articleListReducer } from 'src/widgets/ArticleList';

// const rootReducer = combineReducers({
//     banner: bannerReducer,
//     about: aboutReducer,
//     articlesList: articleListReducer,
//     blog: blogReducer,
// });
//
// export function createReduxStore() {
//     return configureStore({
//         reducer: rootReducer,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).prepend(thunkMiddleware),
//     });
// }

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        banner: bannerReducer,
        articlesList: articleListReducer,
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

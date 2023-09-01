import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ArticlePromoSchema } from 'src/entities/Banner';
import { AppSchema } from 'src/pages/model';
import { AboutSchema } from 'src/widgets/About';
import { ArticlesListSchema } from 'src/widgets/ArticleList/model/types/type.ts';
import { BlogDataSchema } from 'src/widgets/Blog';

export interface StateSchema {
    banner: ArticlePromoSchema,
    articlesList: ArticlesListSchema,
    app: AppSchema,
    // Асинхронные редюсеры
    about?: AboutSchema,
    blog?: BlogDataSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

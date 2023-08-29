import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { AppDispatch, AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';
import { bannerReducer } from 'src/entities/Banner';
import { aboutReducer } from 'src/widgets/About';
import { articleListReducer } from 'src/widgets/ArticleList';
import { blogReducer } from 'src/widgets/Blog';

const rootReducer = combineReducers({
    banner: bannerReducer,
    about: aboutReducer,
    articlesList: articleListReducer,
    blog: blogReducer,
});

export function createReduxStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).prepend(thunkMiddleware),
    });
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

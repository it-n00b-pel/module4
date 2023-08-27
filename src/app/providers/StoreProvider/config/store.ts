import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { AppDispatch, AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';
import { bannerReducer } from 'src/entities/Banner';

const rootReducer = combineReducers({
    banner: bannerReducer,
});

export function createReduxStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).prepend(thunkMiddleware),
    });

    return store;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

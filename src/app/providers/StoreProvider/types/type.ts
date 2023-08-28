import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AboutActionType } from 'src/entities/About';
import {
    BannerActionType,
} from 'src/entities/Banner/model/slice/bannerSlice.ts';

import { createReduxStore } from '../config/store';

export type AppActionsType = BannerActionType | AboutActionType

const store = createReduxStore();

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

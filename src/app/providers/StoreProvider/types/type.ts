import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { BannerActionType } from 'src/entities/Banner/model/slice/bannerSlice.ts';
import { AboutActionType } from 'src/widgets/About';
import { ArticleListActionType } from 'src/widgets/ArticleList';
import { BlogDataActionType } from 'src/widgets/Blog/model/slice/blogSlice.ts';

import { createReduxStore } from '../config/store';

export type AppActionsType = BannerActionType | AboutActionType | ArticleListActionType | BlogDataActionType

const store = createReduxStore();

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

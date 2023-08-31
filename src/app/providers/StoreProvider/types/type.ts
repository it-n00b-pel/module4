import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';
import { BannerActionType } from 'src/entities/Banner/model/slice/bannerSlice.ts';
import { AboutActionType } from 'src/widgets/About';
import { ArticleListActionType } from 'src/widgets/ArticleList';
import { BlogDataActionType } from 'src/widgets/Blog/model/slice/blogSlice.ts';

export type AppActionsType = BannerActionType | AboutActionType | ArticleListActionType | BlogDataActionType

// const store = createReduxStore();

export type AppDispatch = ThunkDispatch<StateSchema, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateSchema, unknown, AppActionsType>

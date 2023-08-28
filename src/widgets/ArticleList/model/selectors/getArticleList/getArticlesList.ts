import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

export const getArticlesList = (state: AppRootStateType) => state.articlesList.articleList;

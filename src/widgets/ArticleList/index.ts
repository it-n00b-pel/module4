import { fetchArticleList } from './model/services/fetchArticleList.ts';

export { setList, articleListReducer } from './model/slice/arcticlesSlice.ts';
export type { ArticleListActionType } from './model/slice/arcticlesSlice.ts';
export { fetchArticleList };
export { ArticlesList } from './ui/ArticlesList.tsx';
export { getArticlesList } from './model/selectors/getArticleList/getArticlesList.ts';

import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getArticlesList = (state: StateSchema) => state.articlesList.data;

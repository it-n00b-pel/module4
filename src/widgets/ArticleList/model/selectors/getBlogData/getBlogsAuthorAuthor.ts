import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBlogsAuthor = (state: StateSchema) => state.blog?.data?.author;

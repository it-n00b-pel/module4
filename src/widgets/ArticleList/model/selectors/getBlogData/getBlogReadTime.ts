import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBlogReadTime = (state: StateSchema) => state.blog?.data?.readTime;

import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getAllBlogData = (state: StateSchema) => state.blog?.data;

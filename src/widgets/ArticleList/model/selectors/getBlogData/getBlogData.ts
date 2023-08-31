import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBlogData = (state: StateSchema) => state.blog?.data;

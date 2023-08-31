import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBlogTitle = (state: StateSchema) => state.blog?.data?.title;

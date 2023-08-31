import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBlogSeoData = (state: StateSchema) => state.blog?.data?.seo;

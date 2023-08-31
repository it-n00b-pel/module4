import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersAuthor = (state: StateSchema) => state.banner.data?.author;

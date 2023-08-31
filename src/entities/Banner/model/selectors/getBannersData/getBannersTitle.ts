import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersTitle = (state: StateSchema) => state.banner.data?.title;

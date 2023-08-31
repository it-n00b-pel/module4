import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersTag = (state: StateSchema) => state.banner.data?.tag;

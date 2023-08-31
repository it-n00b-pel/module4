import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersReadTime = (state: StateSchema) => state.banner.data?.readTime;

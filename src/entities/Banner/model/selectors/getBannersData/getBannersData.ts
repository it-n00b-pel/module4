import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersData = (state: StateSchema) => state.banner.data;

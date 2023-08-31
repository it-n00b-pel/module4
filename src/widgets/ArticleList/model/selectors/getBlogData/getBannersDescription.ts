import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersDescription = (state: StateSchema) => state.banner.data?.description;

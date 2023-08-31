import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersDataId = (state: StateSchema) => state.banner.data?.id;

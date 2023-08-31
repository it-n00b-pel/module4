import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersImage = (state: StateSchema) => state.banner.data?.image;

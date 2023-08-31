import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersDateCreated = (state: StateSchema) => state.banner.data?.createdAt;

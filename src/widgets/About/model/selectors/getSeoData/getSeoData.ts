import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getSeoData = (state: StateSchema) => state.about?.data?.seo;

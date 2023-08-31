import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getContent = (state: StateSchema) => state.about?.data?.content;

import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getError = (state:StateSchema) => state.app.error;

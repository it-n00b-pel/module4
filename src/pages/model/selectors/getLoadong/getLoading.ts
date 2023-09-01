import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getLoading = (state:StateSchema) => state.app.isLoading;

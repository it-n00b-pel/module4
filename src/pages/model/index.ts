export {
    setLoading, setError, appReducer,
} from './slice/appSlice.ts';
export type { AppActionType } from './slice/appSlice.ts';
export type { AppSchema } from './types/type.ts';
export { getError } from './selectors/getError/getError.ts';
export { getLoading } from './selectors/getLoadong/getLoading.ts';

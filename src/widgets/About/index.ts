export type { AboutSchema, AboutResponse } from './model/types/about.ts';

export { setAboutData, aboutReducer } from './model/slice/aboutSlice.ts';
export type { AboutActionType } from './model/slice/aboutSlice.ts';
export { getSeoData } from './model/selectors/getSeoData/getSeoData.ts';
export { getContent } from './model/selectors/getContent/getContent.ts';
export { About } from './ui/About.tsx';

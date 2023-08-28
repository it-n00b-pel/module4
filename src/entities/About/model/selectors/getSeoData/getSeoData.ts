import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

export const getSeoData = (state: AppRootStateType) => state.about.aboutData.seo;

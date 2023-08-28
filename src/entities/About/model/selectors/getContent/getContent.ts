import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

export const getContent = (state: AppRootStateType) => state.about.aboutData.content;

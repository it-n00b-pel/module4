import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

export const getBannersData = (state: AppRootStateType) => state.banner.bannerData;

export { Banner } from './ui/Banner.tsx';
export type { BannerSchema } from './model/types/banner.ts';
export {
    bannerReducer,
    setBannerData,
} from './model/slice/bannerSlice.ts';

export { getBannersData } from './model/selectors/getBannersData/getBannersData.ts';

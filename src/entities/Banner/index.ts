import {
    getBannersAuthor,
    getBannersData,
    getBannersDataId,
    getBannersDateCreated,
    getBannersDescription,
    getBannersImage,
    getBannersReadTime,
    getBannersTag,
    getBannersTitle,
} from './model/selectors/getBannersData/getBannersData.ts';

export { Banner } from './ui/Banner.tsx';
export type { ArticlePromoSchema } from './model/types/banner.ts';
export type { BannerTextPosition } from './model/types/banner.ts';
export {
    bannerReducer,
    setBannerData,
} from './model/slice/bannerSlice.ts';

export {
    getBannersData,
    getBannersAuthor,
    getBannersDataId,
    getBannersDateCreated,
    getBannersDescription,
    getBannersImage,
    getBannersReadTime,
    getBannersTag,
    getBannersTitle,
};
export type { ArticlePromoResponse } from './model/types/banner.ts';

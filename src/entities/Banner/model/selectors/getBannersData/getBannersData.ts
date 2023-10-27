import { StateSchema } from 'src/app/providers/StoreProvider/config/StateSchema.ts';

export const getBannersData = (state: StateSchema) => state.banner.data;

export const getBannersAuthor = (state: StateSchema) => state.banner.data?.author;

export const getBannersDataId = (state: StateSchema) => state.banner.data?.id;
export const getBannersDateCreated = (state: StateSchema) => state.banner.data?.createdAt;
export const getBannersDescription = (state: StateSchema) => state.banner.data?.description;
export const getBannersImage = (state: StateSchema) => state.banner.data?.image;
export const getBannersReadTime = (state: StateSchema) => state.banner.data?.readTime;
export const getBannersTag = (state: StateSchema) => state.banner.data?.tag;

export const getBannersTitle = (state: StateSchema) => state.banner.data?.title;

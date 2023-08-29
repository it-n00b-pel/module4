import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

export const getBlogSeoData = (state: AppRootStateType) => state.blog.blogData.seo;

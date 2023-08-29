import { AppRootStateType } from 'src/app/providers/StoreProvider/types/type.ts';

export const getAllBlogData = (state: AppRootStateType) => state.blog.blogData;

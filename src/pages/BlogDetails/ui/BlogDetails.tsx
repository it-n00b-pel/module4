import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { BlogData, blogReducer } from '@/widgets/Blog';

const reducers: ReducersList = {
    blog: blogReducer,
};

const BlogDetails = () => (
    <DynamicModuleLoader reducers={reducers}>
        <BlogData />
    </DynamicModuleLoader>
);

export default BlogDetails;

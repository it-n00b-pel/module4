import {
    DynamicModuleLoader,
    ReducersList,
} from 'src/shared/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { BlogData, blogReducer } from 'src/widgets/Blog';

const reducers: ReducersList = {
    blog: blogReducer,
};

const BlogDetails = () => (
    <DynamicModuleLoader reducers={reducers}>
        <BlogData />
    </DynamicModuleLoader>
);

export default BlogDetails;

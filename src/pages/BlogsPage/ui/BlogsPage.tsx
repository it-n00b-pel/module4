import { useEffect } from 'react';

import { useAppDispatch } from 'src/app/providers/StoreProvider/config/store.ts';
import { Banner } from 'src/entities/Banner';
import { ArticlesList, fetchArticleList } from 'src/widgets/ArticleList';

const BlogsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleList());
    }, []);
    return (
        <>
            <Banner positionText="top" />
            <ArticlesList isFullList />
        </>
    );
};

export default BlogsPage;

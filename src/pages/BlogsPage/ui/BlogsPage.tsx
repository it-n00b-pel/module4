import { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { useAppDispatch } from 'src/app/providers/StoreProvider/config/store.ts';
import { Banner } from 'src/entities/Banner';
import { ArticlesList, fetchArticleList } from 'src/widgets/ArticleList';

import style from './BlogsPage.module.scss';

const BlogsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleList());
    }, []);
    return (
        <div className={style.blogs}>
            <Helmet>
                <title>nuntium - blogs</title>
            </Helmet>
            <Banner positionText="top" />
            <ArticlesList isFullList />
        </div>
    );
};

export default BlogsPage;

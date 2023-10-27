import { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import style from './BlogsPage.module.scss';

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store.ts';
import { Banner } from '@/entities/Banner';
import { ArticlesList, fetchArticleList } from '@/widgets/ArticleList';

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

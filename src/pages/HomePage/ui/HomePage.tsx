import { useEffect } from 'react';

import srtle from './HomePage.module.scss';

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store.ts';
import { Banner } from '@/entities/Banner';
import { ArticlesList, fetchArticleList } from '@/widgets/ArticleList';

const HomePage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleList());
        document.title = 'nuntium';
    }, []);
    return (
        <div className={srtle.homePage}>
            <Banner positionText="top" />
            <ArticlesList isFullList={false} />
            <Banner positionText="left" />
        </div>
    );
};

export default HomePage;

import { useEffect } from 'react';

import { useAppDispatch } from 'src/app/providers/StoreProvider/config/store.ts';
import { Banner } from 'src/entities/Banner';
import { ArticlesList, fetchArticleList } from 'src/widgets/ArticleList';

import srtle from './HomePage.module.scss';

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

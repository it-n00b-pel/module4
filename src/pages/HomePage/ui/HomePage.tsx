import { useEffect } from 'react';

import { useAppDispatch } from 'src/app/providers/StoreProvider/config/store.ts';
import { Banner } from 'src/entities/Banner';
import { ArticlesList, fetchArticleList } from 'src/widgets/ArticleList';

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleList());
    }, []);
    return (
        <>
            <Banner />
            <ArticlesList isFullList={false} />
        </>
    );
};

export default HomePage;

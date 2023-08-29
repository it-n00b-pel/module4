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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Banner positionText="top" />
            <ArticlesList isFullList={false} />
            <Banner positionText="left" />

        </div>
    );
};

export default HomePage;

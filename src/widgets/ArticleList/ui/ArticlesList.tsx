import { useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { ArticleCard } from 'src/entities/ArticleCard';

import style from './ArticlesList.module.scss';
import { getArticlesList } from '../model/selectors/getArticleList/getArticlesList.ts';

type ArticlesListPropsType = {
    isFullList: boolean
}

export const ArticlesList = ({ isFullList }:ArticlesListPropsType) => {
    const articlesList = useAppSelector(getArticlesList);

    let list = articlesList;

    if (!isFullList) {
        list = articlesList.slice(0, 3);
    }

    return (
        <div className={style.articlesList}>
            <h2 className={style.articlesList__title}>Editor’s Picks</h2>
            {list.map((article) => <ArticleCard acticle={article} key={article.id} />)}
        </div>
    );
};

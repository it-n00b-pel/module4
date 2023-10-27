import { Link } from 'react-router-dom';

import style from './ArticleCard.module.scss';

import { ArticleCardText } from '@/entities/ArticleCard';
import { ArticlePromoResponse } from '@/entities/Banner';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig.tsx';

type ArticleCardPropsType = {
    article: ArticlePromoResponse
}

export const ArticleCard = ({ article }: ArticleCardPropsType) => {
    if (!article) {
        return null;
    }

    const {
        author,
        id,
        tag,
        image,
        title,
        description,
        readTime,
        createdAt,
    } = article;

    return (
        <div className={style.articleCard}>
            <Link to={`${RoutePath.blog_details}${id}`}>
                <img src={image} alt={title} title={title} className={style.articleCard__img} />
            </Link>

            <ArticleCardText
                author={author}
                id={id}
                tag={tag}
                title={title}
                description={description}
                readTime={readTime}
                createdAt={createdAt}
            />

        </div>
    );
};

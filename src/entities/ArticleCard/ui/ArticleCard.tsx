import { Link } from 'react-router-dom';
import { ArticlePromoSchema } from 'src/entities/Banner';

import style from './ArticleCard.module.scss';

type ArticleCardPropsType = {
    acticle: ArticlePromoSchema
}

export const ArticleCard = ({ acticle }: ArticleCardPropsType) => {
    const {
        author,
        id,
        tag,
        image,
        title,
        description,
        readTime,
        createdAt,
    } = acticle;

    const time = `(${Math.round(readTime / 60)} mins read)`;

    const date = new Date(createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

    let dataAuthor = '';

    if (author) {
        dataAuthor = `${author} · ${formattedDate} ${time}`;
    }

    return (
        <div className={style.articleCard}>
            <img src={image} alt="" title={title} className={style.articleCard__img} />
            <div className={style.articleCard__text}>
                <p className={style.articleCard__tag}>{tag}</p>
                <Link to={`${id}`} className={style.articleCard__title}>{title}</Link>
                <p className={style.articleCard__author}>{dataAuthor}</p>
                <p dangerouslySetInnerHTML={{ __html: description }} className={style.articleCard__description} />

            </div>
        </div>
    );
};

import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BannerTextPosition } from 'src/entities/Banner';
import { RoutePath } from 'src/shared/config/routeConfig/routeConfig.tsx';

import style from './ArticleCardText.module.scss';

type ArticleCardTextPropsType = {
    author: string,
    id: number
    tag: string,
    title: string
    description: string
    readTime: number
    createdAt: number
    positionText?: BannerTextPosition
}

export const ArticleCardText = ({
    id,
    tag,
    title,
    description,
    readTime,
    createdAt,
    author,
    positionText,
}: ArticleCardTextPropsType) => {
    const time = `(${Math.round(readTime / 60)} mins read)`;

    const date = new Date(createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

    let dataAuthor = '';

    if (author) {
        dataAuthor = `${author} · ${formattedDate} ${time}`;
    }

    return (
        <div className={classNames(
            { [style.articleCard__textTop]: positionText === 'top' },
            { [style.articleCard__textLeft]: positionText === 'left' },
            style.articleCard__text,
        )}
        >

            <p className={style.articleCard__tag}>{tag}</p>
            <Link
                to={`${RoutePath.blog_details}${id}`}
                className={style.articleCard__title}
            >
                {title}
            </Link>
            <p className={style.articleCard__author}>{dataAuthor}</p>
            {/* eslint-disable-next-line react/no-danger */}
            <p dangerouslySetInnerHTML={{ __html: description }} className={style.articleCard__description} />
        </div>
    );
};

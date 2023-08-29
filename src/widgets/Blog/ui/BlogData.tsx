import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { RoutePath } from 'src/shared/config/routeConfig/routeConfig.tsx';
import { getAllBlogData } from 'src/widgets/Blog';

import style from './BlogData.module.scss';
import leftArrow from '../../../shared/assets/icons/leftArrow.svg';
import rightArrow from '../../../shared/assets/icons/rightArrow.jpg';
import authorImg from '../../../shared/assets/img/author.png';

export const BlogData = () => {
    const {
        tag,
        createdAt,
        image,
        author,
        readTime,
        description,
        title,
        prevId,
        nextId,
    } = useAppSelector(getAllBlogData);

    const time = `(${Math.round(+readTime / 60)} mins read)`;

    const date = new Date(createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

    let dataAuthor = '';

    if (author) {
        dataAuthor = `${author.name} · ${formattedDate} ${time}`;
    }

    return (
        <div className={style.blog}>
            <div
                className={style.blog__img}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={style.blog__text}>
                <h3 className={style.blog__title}>{title}</h3>
                <p className={style.blog__author}>{dataAuthor}</p>
                <p className={style.blog__tag}>
                    #
                    {tag.name}
                </p>

                {/* eslint-disable-next-line react/no-danger */}
                <p dangerouslySetInnerHTML={{ __html: description }} className={style.blog__description} />
            </div>

            <div className={style.blog__authorBlock}>
                <h3>ABOUT AUTHOR</h3>
                <div className={style.blog__authorData}>
                    <img src={authorImg} alt="" className={style.blog__authorImg} />
                    <div className={style.blog__authorAbout}>
                        <h4 className={style.blog__authorName}>{author.name}</h4>
                        <p className={style.blog__authorNick}>
                            @
                            {author.nick}
                        </p>
                        <p className={style.blog__authorAboutText}>{author.about}</p>
                    </div>
                </div>
            </div>

            <div className={style.blog__navigation}>
                <Link to={`${RoutePath.blog_details}${prevId}`} className={style.blog__leftArrow}>
                    <img src={leftArrow} alt="" />
                    <p>Go Back</p>
                </Link>
                <Link to={`${RoutePath.blog_details}${nextId}`} className={style.blog__rightArrow}>
                    <p>Next up</p>
                    <img src={rightArrow} alt="" />
                </Link>
            </div>
        </div>
    );
};

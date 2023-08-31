import { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { RoutePath } from 'src/shared/config/routeConfig/routeConfig.tsx';
import { getBlogData } from 'src/widgets/ArticleList/model/selectors/getBlogData/getBlogData.ts';
import { fetchBlogData } from 'src/widgets/Blog';

import style from './BlogData.module.scss';
import leftArrow from '../../../shared/assets/icons/leftArrow.svg';
import rightArrow from '../../../shared/assets/icons/rightArrow.jpg';
import authorImg from '../../../shared/assets/img/author.png';

export const BlogData = () => {
    const params = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (params.id) {
            dispatch(fetchBlogData(+params.id));
        }
    }, [params.id]);

    const blog = useAppSelector(getBlogData);

    if (!blog) {
        return null;
    }

    const time = `(${Math.round(+blog.readTime / 60)} mins read)`;

    const date = new Date(blog.createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

    let dataAuthor = '';

    if (blog.author) {
        dataAuthor = `${blog.author.name} · ${formattedDate} ${time}`;
    }

    const checkPrevArrow = () => (blog.prevId ? (
        <Link
            to={`${RoutePath.blog_details}${blog.prevId}`}
            className={style.blog__leftArrow}
        >
            <img src={leftArrow} alt="leftArrow" title="leftArrow" />
            <p className={style.blog__navigationText}>Go Back</p>
        </Link>
    )
        : <></>);

    const checkNextArrow = () => (blog.nextId ? (
        <Link
            to={`${RoutePath.blog_details}${blog.nextId}`}
            className={style.blog__rightArrow}
        >
            <p className={style.blog__navigationText}>Next up</p>
            <img src={rightArrow} alt="rightArrow" title="rightArrow" />
        </Link>
    )
        : <></>);

    return (
        <>
            <Helmet>
                <title>{blog.seo.title}</title>
                <meta name="description" content={blog.seo.description} />
                <meta name="keywords" content={blog.seo.keywords} />
            </Helmet>

            <div className={style.blog}>
                <div
                    className={style.blog__img}
                    style={{ backgroundImage: `url(${blog.image})` }}
                />
                <div className={style.blog__text}>
                    <h3 className={style.blog__title}>{blog.title}</h3>
                    <p className={style.blog__author}>{dataAuthor}</p>
                    <p className={style.blog__tag}>
                        #
                        {blog.tag.name}
                    </p>

                    {/* eslint-disable-next-line react/no-danger */}
                    <p dangerouslySetInnerHTML={{ __html: blog.description }} className={style.blog__description} />
                </div>

                <div className={style.blog__authorBlock}>
                    <h3>ABOUT AUTHOR</h3>
                    <div className={style.blog__authorData}>
                        <img src={authorImg} alt="" className={style.blog__authorImg} />
                        <div className={style.blog__authorAbout}>
                            <h4 className={style.blog__authorName}>{blog.author.name}</h4>
                            <p className={style.blog__authorNick}>
                                @
                                {blog.author.nick}
                            </p>
                            <p className={style.blog__authorAboutText}>{blog.author.about}</p>
                        </div>
                    </div>
                    <p className={style.blog__authorAboutText__condition}>{blog.author.about}</p>

                </div>

                <div className={style.blog__navigation}>
                    {/* {blog.prevId && ( */}
                    {/*    <Link */}
                    {/*        to={`${RoutePath.blog_details}${blog.prevId}`} */}
                    {/*        className={style.blog__leftArrow} */}
                    {/*    > */}
                    {/*        <img src={leftArrow} alt="leftArrow" title="leftArrow" /> */}
                    {/*        <p className={style.blog__navigationText}>Go Back</p> */}
                    {/*    </Link> */}
                    {/* )} */}

                    {checkPrevArrow()}
                    {checkNextArrow()}
                </div>
            </div>
        </>
    );
};

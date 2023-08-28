import { memo, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { fetchBannerData } from 'src/entities/Banner/model/services/fetchBannerData.ts';

import style from './Banner.module.scss';
import { getBannersData } from '../model/selectors/getBannersData/getBannersData.ts';

export const Banner = memo(() => {
    const dispatch = useAppDispatch();
    const {
        createdAt,
        // id,
        tag,
        image,
        author,
        title,
        readTime,
        description,
    } = useAppSelector(getBannersData);

    // Высота картинок может быть разной/ прдполагаю что в сылке в конце указаны размеры
    let height;
    if (image) {
        height = `${image.slice(image.length - 7, image.length - 4)}px`;
    }
    const time = `(${Math.round(readTime / 60)} mins read)`;

    const date = new Date(createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);

    let dataAuthor = '';

    if (author) {
        dataAuthor = `${author} · ${formattedDate} ${time}`;
    }

    useEffect(() => {
        dispatch(fetchBannerData());
    }, []);

    return (
        <div className={style.banner} style={{ backgroundImage: `url(${image})`, height }}>
            <div className={style.banner__card}>
                <p className={style.banner__tag}>{tag}</p>
                <Link to="/" className={style.banner__title}>{title}</Link>
                <p className={style.banner__author}>{dataAuthor}</p>
                <p className={style.banner__description}>{description}</p>
            </div>
        </div>
    );
});

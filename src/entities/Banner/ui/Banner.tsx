import { memo, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { ArticleCardText } from 'src/entities/ArticleCard';
import { fetchBannerData } from 'src/entities/Banner/model/services/fetchBannerData.ts';

import style from './Banner.module.scss';
import { getBannersData } from '../model/selectors/getBannersData/getBannersData.ts';
import { BannerTextPosition } from '../model/types/banner.ts';

type BannerPropsType = {
    positionText?: BannerTextPosition
}

export const Banner = memo(({ positionText }:BannerPropsType) => {
    const dispatch = useAppDispatch();
    const {
        createdAt,
        id,
        tag,
        image,
        author,
        title,
        readTime,
        description,
    } = useAppSelector(getBannersData);

    useEffect(() => {
        dispatch(fetchBannerData());
    }, []);

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 425);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div
            className={style.banner}
            style={isSmallScreen ? { backgroundImage: 'none' } : { backgroundImage: `url(${image})` }}
        >
            <ArticleCardText
                author={author}
                id={id}
                tag={tag}
                title={title}
                description={description}
                readTime={readTime}
                createdAt={createdAt}
                positionText={positionText}
            />
        </div>
    );
});

import { memo, useEffect, useState } from 'react';

import style from './Banner.module.scss';
import {
    BannerTextPosition, getBannersAuthor,
    getBannersDataId, getBannersDateCreated, getBannersDescription,
    getBannersImage, getBannersReadTime,
    getBannersTag, getBannersTitle,
} from '../index.ts';

import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/store.ts';
import { ArticleCardText } from '@/entities/ArticleCard';
import { fetchBannerData } from '@/entities/Banner/model/services/fetchBannerData.ts';

type BannerPropsType = {
    positionText?: BannerTextPosition
}

export const Banner = memo(({ positionText }:BannerPropsType) => {
    const dispatch = useAppDispatch();

    const id = useAppSelector(getBannersDataId);
    const tag = useAppSelector(getBannersTag);
    const image = useAppSelector(getBannersImage);
    const createdAt = useAppSelector(getBannersDateCreated);
    const author = useAppSelector(getBannersAuthor);
    const title = useAppSelector(getBannersTitle);
    const description = useAppSelector(getBannersDescription);
    const readTime = useAppSelector(getBannersReadTime);

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

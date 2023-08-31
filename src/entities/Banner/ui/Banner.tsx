import { memo, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { ArticleCardText } from 'src/entities/ArticleCard';
import {
    getBannersAuthor,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersAuthor.ts';
import {
    getBannersDataId,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersDataId.ts';
import {
    getBannersDateCreated,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersDateCreated.ts';
import {
    getBannersDescription,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersDescription.ts';
import {
    getBannersImage,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersImage.ts';
import {
    getBannersReadTime,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersReadTime.ts';
import { getBannersTag } from 'src/entities/Banner/model/selectors/getBannersData/getBannersTag.ts';
import {
    getBannersTitle,
} from 'src/entities/Banner/model/selectors/getBannersData/getBannersTitle.ts';
import { fetchBannerData } from 'src/entities/Banner/model/services/fetchBannerData.ts';

import style from './Banner.module.scss';
import { BannerTextPosition } from '../model/types/banner.ts';

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

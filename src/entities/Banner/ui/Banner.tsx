import { memo, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { fetchBannerData } from 'src/entities/Banner/model/services/fetchBannerData.ts';

import { getBannersData } from '../model/selectors/getBannersData/getBannersData.ts';

export const Banner = memo(() => {
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
    return (
        <div>
            <></>
        </div>
    );
});

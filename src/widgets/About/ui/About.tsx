import { useEffect, useState } from 'react';

import style from './About.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/store.ts';
import { getContent } from '@/widgets/About';
import { fetchAboutData } from '@/widgets/About/model/services/fetchAboutData.ts';

export const About = () => {
    const content = useAppSelector(getContent);
    const tittle = useAppSelector((state) => state.about?.data?.title);
    const dispatch = useAppDispatch();
    const [imgTag, setimgTag] = useState('');
    const [beforeImg, setBeforeImg] = useState('');
    const [afterImg, setAfterImg] = useState('');

    useEffect(() => {
        dispatch(fetchAboutData());
    }, []);

    useEffect(() => {
    }, [tittle]);

    useEffect(() => {
        if (content) {
            let str = content;
            const imgPosition = str.indexOf('<img');

            const beforeImg = `${str.substring(0, imgPosition)}</p>`;
            setBeforeImg(beforeImg);
            str = str.replace(beforeImg, '');

            const imgTag = str.substring(imgPosition, str.indexOf('</p>'));
            setimgTag(imgTag);
            str = str.replace(imgTag, '');

            const afterImg = str.substring(0, str.length);
            setAfterImg(afterImg);
        }
    }, [content]);

    if (!content) {
        return null;
    }

    return (
        <div className={style.about}>
            <div className={style.about__content}>
                <h2 className={style.about__title}>{tittle}</h2>
                <div className={style.about__topContent}>
                    {/* eslint-disable-next-line react/no-danger */}
                    <div className={style.about__topContent__text} dangerouslySetInnerHTML={{ __html: beforeImg }} />
                    {/* eslint-disable-next-line react/no-danger */}
                    <div className={style.about__topContent__image} dangerouslySetInnerHTML={{ __html: imgTag }} />
                </div>
                {/* eslint-disable-next-line react/no-danger */}
                <p dangerouslySetInnerHTML={{ __html: afterImg }} />
            </div>
        </div>
    );
};

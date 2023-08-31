import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { getContent } from 'src/widgets/About';
import { fetchAboutData } from 'src/widgets/About/model/services/fetchAboutData.ts';

import style from './About.module.scss';

export const About = () => {
    const content = useAppSelector(getContent);

    const tittle = useAppSelector((state) => state.about?.data?.title);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAboutData());
    }, []);

    useEffect(() => {
    }, [tittle]);

    if (!content) {
        return null;
    }

    return (
        <div className={style.about}>
            <div className={style.about__content}>
                <h2 className={style.about__title}>{tittle}</h2>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: content }} className={style.about__text} />
            </div>

        </div>
    );
};

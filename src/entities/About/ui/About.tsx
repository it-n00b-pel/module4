import { useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { getContent } from 'src/entities/About';

import style from './About.module.scss';

export const About = () => {
    const content = useAppSelector(getContent);
    const tittle = useAppSelector((state) => state.about.aboutData.title);
    return (
        <div className={style.about}>
            <div className={style.about__content}>
                <h2 className={style.about__title}>{tittle}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} className={style.about__text} />
            </div>

        </div>
    );
};

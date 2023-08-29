import { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { About, getSeoData } from 'src/widgets/About';
import { fetchAboutData } from 'src/widgets/About/model/services/fetchAboutData.ts';

const AboutPage = () => {
    const dispatch = useAppDispatch();
    const seoData = useAppSelector(getSeoData);

    useEffect(() => {
        dispatch(fetchAboutData());
    }, []);

    if (!seoData) return null;
    return (
        <>
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />
            </Helmet>
            <About />
        </>
    );
};

export default AboutPage;

import { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/providers/StoreProvider/config/store.ts';
import { BlogData, fetchBlogData, getBlogSeoData } from 'src/widgets/Blog';

const BlogDetails = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const seoData = useAppSelector(getBlogSeoData);

    useEffect(() => {
        if (params.id) {
            dispatch(fetchBlogData(+params.id));
        }
    }, []);

    if (!seoData) return null;
    return (
        <>
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />
            </Helmet>
            <BlogData />
        </>
    );
};

export default BlogDetails;

import axios, { AxiosResponse } from 'axios';
import { ArticlePromoResponse } from 'src/entities/Banner';
import { AboutResponse } from 'src/widgets/About';
import { BlogDataResponse } from 'src/widgets/Blog/model/types/blog.ts';

export const instance = axios.create({
    baseURL: 'https://course.vue.panfilov.academy/',
});

export const nuntiumApi = {
    getBannerData(): Promise<AxiosResponse<ArticlePromoResponse>> {
        return instance.get('rest/v1/blog/featured');
    },
    getAboutData(): Promise<AxiosResponse<AboutResponse>> {
        return instance.get('rest/v1/about');
    },
    getArticles(): Promise<AxiosResponse<Array<ArticlePromoResponse>>> {
        return instance.get('rest/v1/blog/articles');
    },
    getBlogData(id: number): Promise<AxiosResponse<BlogDataResponse>> {
        return instance.get(`rest/v1/blog/article/${id}`);
    },
};

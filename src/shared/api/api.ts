import axios, { AxiosResponse } from 'axios';
import { AboutSchema } from 'src/entities/About';
import { ArticlePromoSchema } from 'src/entities/Banner';

// export const instance = axios.create({
//     baseURL: 'https://course.vue.panfilov.academy/',
// });

export const nuntiumApi = {
    getBannerData(): Promise<AxiosResponse<ArticlePromoSchema>> {
        return axios.get('https://course.vue.panfilov.academy/rest/v1/blog/featured');
    },
    getAboutData(): Promise<AxiosResponse<AboutSchema>> {
        return axios.get('https://course.vue.panfilov.academy/rest/v1/about');
    },
    getArticles(): Promise<AxiosResponse<Array<ArticlePromoSchema>>> {
        return axios.get('https://course.vue.panfilov.academy/rest/v1/blog/articles');
    },
};

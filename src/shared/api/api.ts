import axios, { AxiosResponse } from 'axios';
import { AboutSchema } from 'src/entities/About';
import { articlePromoSchema } from 'src/entities/Banner';

// export const instance = axios.create({
//     baseURL: 'https://course.vue.panfilov.academy/',
// });

export const nuntiumApi = {
    getBannerData(): Promise<AxiosResponse<articlePromoSchema>> {
        return axios.get('https://course.vue.panfilov.academy/rest/v1/blog/featured');
    },
    getAboutrData(): Promise<AxiosResponse<AboutSchema>> {
        return axios.get('https://course.vue.panfilov.academy/rest/v1/about');
    },
};

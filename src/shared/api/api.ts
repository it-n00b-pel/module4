import axios, { AxiosResponse } from 'axios';
import { BannerSchema } from 'src/entities/Banner';

// export const instance = axios.create({
//     baseURL: 'https://course.vue.panfilov.academy/',
// });

export const nuntiumApi = {
    getBannerData(): Promise<AxiosResponse<BannerSchema>> {
        return axios.get('https://course.vue.panfilov.academy/rest/v1/blog/featured');
    },
};

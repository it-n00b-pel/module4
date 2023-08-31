import { SeoType } from 'src/shared/types/types.ts';

export type AboutSchema = {
    data?:AboutResponse
}

export type AboutResponse = {
    title: string
    seo: SeoType
    content: string
}

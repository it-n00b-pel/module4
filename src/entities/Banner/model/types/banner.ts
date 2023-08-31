export type ArticlePromoSchema = {
    data?: ArticlePromoResponse
}

export type ArticlePromoResponse = {
        id: number,
        tag: string,
        title: string,
        author: string,
        createdAt: number,
        image: string,
        readTime: number,
        description: string
}

export type BannerTextPosition = 'top' | 'left'

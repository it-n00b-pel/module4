export type BlogDataSchema = {
    id: number,
    title: string,
    seo: {
        id: number,
        title: string,
        description: string,
        keywords: string,
        content: string,
    },
    author: {
        id: number,
        name: string,
        nick: string,
        about: string,
    },
    tag: {
        id: number,
        name: string,
    },
    createdAt: number,
    image: string,
    readTime: string,
    description: string,
    nextId: number,
    prevId: number,
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlePromoSchema } from 'src/entities/Banner';

const slice = createSlice({
    name: 'articleList',
    initialState: {
        articleList: [] as Array <ArticlePromoSchema>,
    },
    reducers: {
        setList(state, action: PayloadAction<{data: Array <ArticlePromoSchema>}>) {
            state.articleList = action.payload.data;
        },
    },
});

export const articleListReducer = slice.reducer;
export const { setList } = slice.actions;

export type ArticleListActionType = ReturnType<typeof setList>

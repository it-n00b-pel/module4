import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlePromoResponse } from 'src/entities/Banner';
import { ArticlesListSchema } from 'src/widgets/ArticleList/model/types/type.ts';

const initialState:ArticlesListSchema = {
    data: undefined,
};

const slice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setList(state, action: PayloadAction<{data: Array <ArticlePromoResponse>}>) {
            state.data = action.payload.data;
        },
    },
});

export const articleListReducer = slice.reducer;
export const { setList } = slice.actions;

export type ArticleListActionType = ReturnType<typeof setList>

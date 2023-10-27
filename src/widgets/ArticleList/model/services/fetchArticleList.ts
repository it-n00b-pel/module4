import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoading } from '@/pages/model';
import { nuntiumApi } from '@/shared/api/api.ts';
import { setList } from '@/widgets/ArticleList';

export const fetchArticleList = createAsyncThunk('articleList/fetchArticleList', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getArticles();
        thunkAPI.dispatch(setList({ data: response.data }));
    } catch (e) {
        console.error(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

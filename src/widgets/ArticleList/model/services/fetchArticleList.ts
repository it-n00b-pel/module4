import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'src/pages/model';
import { nuntiumApi } from 'src/shared/api/api.ts';
import { setList } from 'src/widgets/ArticleList';

export const fetchArticleList = createAsyncThunk('articleList/fetchArticleList', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getArticles();
        thunkAPI.dispatch(setList({ data: response.data }));
    } catch (e) {
        console.warn(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

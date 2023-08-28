import { createAsyncThunk } from '@reduxjs/toolkit';
import { nuntiumApi } from 'src/shared/api/api.ts';
import { setList } from 'src/widgets/ArticleList';

export const fetchArticleList = createAsyncThunk('articleList/fetchArticleList', async (_, thunkAPI) => {
    const response = await nuntiumApi.getArticles();
    thunkAPI.dispatch(setList({ data: response.data }));
});

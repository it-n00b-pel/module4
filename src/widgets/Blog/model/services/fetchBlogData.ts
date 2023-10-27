import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoading } from '@/pages/model';
import { nuntiumApi } from '@/shared/api/api.ts';
import { setBlogData } from '@/widgets/Blog';

export const fetchBlogData = createAsyncThunk('blog/fetchBlogData', async (id: number, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getBlogData(id);
        thunkAPI.dispatch(setBlogData({ data: response.data }));
    } catch (e) {
        console.error(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

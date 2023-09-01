import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'src/pages/model';
import { nuntiumApi } from 'src/shared/api/api.ts';
import { setBlogData } from 'src/widgets/Blog/model/slice/blogSlice.ts';

export const fetchBlogData = createAsyncThunk('blog/fetchBlogData', async (id: number, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getBlogData(id);
        thunkAPI.dispatch(setBlogData({ data: response.data }));
    } catch (e) {
        console.warn(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

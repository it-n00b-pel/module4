import { createAsyncThunk } from '@reduxjs/toolkit';
import { nuntiumApi } from 'src/shared/api/api.ts';
import { setBlogData } from 'src/widgets/Blog/model/slice/blogSlice.ts';

export const fetchBlogData = createAsyncThunk('blog/fetchBlogData', async (id: number, thunkAPI) => {
    try {
        const response = await nuntiumApi.getBlogData(id);
        thunkAPI.dispatch(setBlogData({ data: response.data }));
    } catch (e) {
        console.warn(e);
    }
});

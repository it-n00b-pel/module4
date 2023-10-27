import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoading } from '@/pages/model';
import { nuntiumApi } from '@/shared/api/api.ts';
import { setAboutData } from '@/widgets/About';

export const fetchAboutData = createAsyncThunk('about/fetchAboutData', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getAboutData();
        thunkAPI.dispatch(setAboutData({ data: response }));
    } catch (e) {
        console.error(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

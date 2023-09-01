import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'src/pages/model';
import { nuntiumApi } from 'src/shared/api/api.ts';
import { setAboutData } from 'src/widgets/About';

export const fetchAboutData = createAsyncThunk('about/fetchAboutData', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getAboutData();
        thunkAPI.dispatch(setAboutData({ data: response }));
    } catch (e) {
        console.warn(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

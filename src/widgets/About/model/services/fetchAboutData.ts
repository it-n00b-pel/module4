import { createAsyncThunk } from '@reduxjs/toolkit';
import { nuntiumApi } from 'src/shared/api/api.ts';
import { setAboutData } from 'src/widgets/About';

export const fetchAboutData = createAsyncThunk('about/fetchAboutData', async (_, thunkAPI) => {
    const response = await nuntiumApi.getAboutData();
    thunkAPI.dispatch(setAboutData({ data: response }));
});

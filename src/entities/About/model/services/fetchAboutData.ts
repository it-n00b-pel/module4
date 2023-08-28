import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAboutData } from 'src/entities/About';
import { nuntiumApi } from 'src/shared/api/api.ts';

export const fetchAboutData = createAsyncThunk('about/fetchAboutData', async (_, thunkAPI) => {
    const response = await nuntiumApi.getAboutrData();
    thunkAPI.dispatch(setAboutData({ data: response.data }));
});

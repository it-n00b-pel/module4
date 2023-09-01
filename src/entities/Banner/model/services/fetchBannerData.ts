import { createAsyncThunk } from '@reduxjs/toolkit';
import { setBannerData } from 'src/entities/Banner';
import { nuntiumApi } from 'src/shared/api/api.ts';

export const fetchBannerData = createAsyncThunk('banner/fetchBannerData', async (_, thunkAPI) => {
    try {
        const response = await nuntiumApi.getBannerData();
        thunkAPI.dispatch(setBannerData({ data: response.data }));
    } catch (e) {
        console.warn(e);
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';

import { setBannerData } from '@/entities/Banner';
import { setLoading } from '@/pages/model';
import { nuntiumApi } from '@/shared/api/api.ts';

export const fetchBannerData = createAsyncThunk('banner/fetchBannerData', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({ isLoading: true }));
        const response = await nuntiumApi.getBannerData();
        thunkAPI.dispatch(setBannerData({ data: response.data }));
    } catch (e) {
        console.error(e);
    } finally {
        thunkAPI.dispatch(setLoading({ isLoading: false }));
    }
});

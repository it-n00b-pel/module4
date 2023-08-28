import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { articlePromoSchema } from '../types/banner.ts';

const slice = createSlice({
    name: 'banner',
    initialState: {
        bannerData: {} as articlePromoSchema,
    },
    reducers: {
        setBannerData(state, action: PayloadAction<{data: articlePromoSchema}>) {
            state.bannerData = action.payload.data;
        },
    },
});

export const bannerReducer = slice.reducer;
export const { setBannerData } = slice.actions;

export type BannerActionType = ReturnType<typeof setBannerData>

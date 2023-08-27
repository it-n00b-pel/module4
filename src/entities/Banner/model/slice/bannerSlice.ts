import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BannerSchema } from '../types/banner.ts';

const slice = createSlice({
    name: 'banner',
    initialState: {
        bannerData: {} as BannerSchema,
    },
    reducers: {
        setBannerData(state, action: PayloadAction<{data: BannerSchema}>) {
            state.bannerData = action.payload.data;
        },
    },
});

export const bannerReducer = slice.reducer;
export const { setBannerData } = slice.actions;

export type BannerActionType = ReturnType<typeof setBannerData>

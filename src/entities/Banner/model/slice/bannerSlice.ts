import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticlePromoSchema } from '../types/banner.ts';

const slice = createSlice({
    name: 'banner',
    initialState: {
        bannerData: {} as ArticlePromoSchema,
    },
    reducers: {
        setBannerData(state, action: PayloadAction<{data: ArticlePromoSchema}>) {
            state.bannerData = action.payload.data;
        },
    },
});

export const bannerReducer = slice.reducer;
export const { setBannerData } = slice.actions;

export type BannerActionType = ReturnType<typeof setBannerData>

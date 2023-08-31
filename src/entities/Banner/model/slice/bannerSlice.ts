import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticlePromoResponse, ArticlePromoSchema } from '../types/banner.ts';

const initialState : ArticlePromoSchema = {
    data: undefined,
};

const slice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setBannerData(state, action: PayloadAction<{data: ArticlePromoResponse}>) {
            state.data = action.payload.data;
        },
    },
});

export const bannerReducer = slice.reducer;
export const { setBannerData } = slice.actions;

export type BannerActionType = ReturnType<typeof setBannerData>

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BlogDataResponse, BlogDataSchema } from '../types/blog.ts';

const initialState:BlogDataSchema = {
    data: undefined,
};

const slice = createSlice({
    name: 'blogData',
    initialState,
    reducers: {
        setBlogData(state, action: PayloadAction<{data: BlogDataResponse}>) {
            state.data = action.payload.data;
        },
    },
});

export const blogReducer = slice.reducer;
export const { setBlogData } = slice.actions;

export type BlogDataActionType = ReturnType<typeof setBlogData>

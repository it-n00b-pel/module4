import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BlogDataSchema } from '../types/blog.ts';

const slice = createSlice({
    name: 'blogData',
    initialState: {
        blogData: {} as BlogDataSchema,
    },
    reducers: {
        setBlogData(state, action: PayloadAction<{data: BlogDataSchema}>) {
            state.blogData = action.payload.data;
        },
    },
});

export const blogReducer = slice.reducer;
export const { setBlogData } = slice.actions;

export type BlogDataActionType = ReturnType<typeof setBlogData>

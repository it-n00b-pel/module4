import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AboutSchema } from '../types/about.ts';

const slice = createSlice({
    name: 'about',
    initialState: {
        aboutData: {} as AboutSchema,
    },
    reducers: {
        setAboutData(state, action: PayloadAction<{data: AboutSchema}>) {
            state.aboutData = action.payload.data;
        },
    },
});

export const aboutReducer = slice.reducer;
export const { setAboutData } = slice.actions;

export type AboutActionType = ReturnType<typeof setAboutData>

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AboutSchema } from '../types/about.ts';

const initialState: AboutSchema = {
    data: undefined,
};

const slice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAboutData(state, action: PayloadAction<{data: AboutSchema}>) {
            state.data = action.payload.data.data;
        },
    },
});

export const aboutReducer = slice.reducer;
export const { setAboutData } = slice.actions;

export type AboutActionType = ReturnType<typeof setAboutData>

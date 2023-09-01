import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSchema } from 'src/pages/model/types/type.ts';

const initialState : AppSchema = {
    isLoading: false,
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<{isLoading: boolean}>) {
            state.isLoading = action.payload.isLoading;
        },
        setError(state, action: PayloadAction<{error: string | null}>) {
            state.error = action.payload.error;
        },
    },
});

export const appReducer = slice.reducer;
export const { setLoading, setError } = slice.actions;

export type AppActionType = ReturnType<typeof setLoading> | ReturnType<typeof setLoading>

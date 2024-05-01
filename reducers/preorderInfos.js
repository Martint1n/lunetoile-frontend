import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {},
};

export const preorderInfosSlice = createSlice({
    name: 'preorderInfos',
    initialState,
    reducers: {
        addPreorderInfoToStore: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { addPreorderInfoToStore } = preorderInfosSlice.actions;
export default preorderInfosSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addTokenToStore: (state, action) => {
            state.token = action.payload;
        },
    }
});

export const { addTokenToStore } = usersSlice.actions;
export default usersSlice.reducer;
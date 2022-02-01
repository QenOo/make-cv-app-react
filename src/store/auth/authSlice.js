import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isLoggedIn: false,
    username: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {},
});

export default authSlice.reducer;

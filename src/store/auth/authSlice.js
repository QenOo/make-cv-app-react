import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isLoggedIn: false,
    isLoading: false,
    user: {
        email: '',
        name: '',
        password: '',
    },
};

export const addUser = createAsyncThunk(
    'auth/addUser',
    async (args, thunkAPI) => {
        // Get auth State
        const { rejectWithValue } = thunkAPI;

        // add user to api
        try {
            const res = await fetch(`http://localhost:3008/auth`, {
                method: 'POST',
                body: JSON.stringify(args),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
        [addUser.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            localStorage.setItem('UserInfo', JSON.stringify(action.payload));
            localStorage.setItem('isLoggedIn', state.isLoggedIn);
        },
        [addUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
        },
    },
});

export const { getUserDataForm } = authSlice.actions;
export default authSlice.reducer;

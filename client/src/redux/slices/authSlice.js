import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api/index';

export const createAccount = createAsyncThunk( 
    'createAccount', 
        async (user, thunkAPI) => {
        try {
            const { data } = await API.createAccount(user)
        
        if (data.success === true) {
            localStorage.setItem('AuthToken', JSON.stringify(data.token));
            localStorage.setItem('uuid', JSON.stringify(data.uuid));
            return data
        } else {
            return thunkAPI.rejectWithValue(data);
        }

        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.statusText);
        }
    }
 ) 

 export const login = createAsyncThunk( 
    'login', 
        async (user, thunkAPI) => {
        try {
            const { data } = await API.login(user)

        if (data.success === true) {
            localStorage.setItem('AuthToken', JSON.stringify(data.token));
            localStorage.setItem('uuid', JSON.stringify(data.uuid));
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }

        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.statusText);
        }
    }
 ) 

const initialState = { authData: [], error: false }

export const authSlice = createSlice( { 
    name: 'userAuth', 
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.clear()
            state.authData = []
        }
    },
    extraReducers: (builder) => {
      builder.addCase(createAccount.fulfilled, (state, action) => {
        state.authData = action.payload;
      })
      builder.addCase(createAccount.rejected, (state) => {
      state.error = true;
      });
      builder.addCase(login.fulfilled, (state, action) => {
      state.authData = action.payload;
      })
      builder.addCase(login.rejected, (state) => {
      state.error = true;
      });
    }
}); 

export const { logout } = authSlice.actions;
export default authSlice.reducer;
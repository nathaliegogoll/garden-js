import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api/index';

export const createAccount = createAsyncThunk( 
    'createAccount', 
        async (user, thunkAPI) => {
        try {
            const response = await API.createAccount(user)
            const data = await response.json()
        
        if (response.status === 200) {
            localStorage.setItem('AuthToken', data.token)
            return data
        } else {
            return thunkAPI.rejectWithValue(data);
        }

        } catch (err) {
            console.log('Error', err.response.data);
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
 ) 

const initialState = { authData: [], error: false }

export const authSlice = createSlice( { 
    name:'userAuth', 
    initialState,
    reducers: {
      extraReducers: (builder) => {
        builder.addCase(createAccount.fulfilled, (state, action) => {
          state.authData = action.payload;
        })
        builder.addCase(createAccount.rejected, (state) => {
        state.error = true;
        });
        }
    }
}); 

// export const { } = authSlice.actions;
export default authSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as API from '../../api/index'

export const postUser = createAsyncThunk( 
    'postUser', 
    async (id, thunkAPI) => { 
        const data = await API.createLevel(id); 
        const level = await data.json();
        return level;
    } 
  ) 

 /*  export const postUser = createAsyncThunk( 
    'postUser', 
    async (id, thunkAPI) => { 
        const data = await fetch(`${id}`, {method: 'POST'}); 
        const user = await data.json();
        return user;
    } 
  )  */

const initialState = { user: {}, error: false, loading: true , uuid: ''};

export const user = createSlice( { 
      name:'user', 
      initialState,
      reducers: {
          addUuid: (state, action) => {
              state.uuid = action.payload;
          }, 
      }, 
      extraReducers: (builder) => {
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        builder.addCase(postUser.rejected, (state) => {
            state.error = true;
        });
      }
  }); 
  
  export const { addUuid } = user.actions;
  export default user.reducer;
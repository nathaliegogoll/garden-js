import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api/index'

export const postUser = createAsyncThunk( 
    'postUser', 
    async (id, thunkAPI) => { 
        const { data } = await API.createLevel(id); 
        return data.level;
    } 
  ) 

export const fetchUser = createAsyncThunk( 
    'fetchUser', 
    async (id, thunkAPI) => { 
        const { data } = await API.fetchLevel(id); 
        return data;
    } 
  ) 

export const modifyUser = createAsyncThunk( 
    'modifyUser', 
    async (updatedUser, thunkAPI) => { 
        const { data } = await API.modifyLevel(updatedUser); 
        return data;
    } 
  ) 

const initialState = { user: { id: '', carrotNumber: 0, lastConnected: '', completedKatas: [], level: 0, xp: 0, perks: []}, error: false, loading: true , uuid: '', levelup: true};

export const user = createSlice( { 
      name:'user', 
      initialState,
      reducers: {
          addUuid: (state, action) => {
              state.uuid = action.payload;
          }, 
          addXp: (state) => {
              state.user.xp += 1;
          }, 
          resetGame: (state) => {
              state.user.xp = 0;
              state.user.level = 0;
              state.user.completedKatas = [];
          },
          handleCorrectAnswer: (state, action) => {
              state.user.carrotNumber -= 1; 
              state.user.xp += 1;
              state.user.completedKatas = [...state.user.completedKatas,action.payload];
          },
          handleWrongAnswer: (state)  => {
              state.user.carrotNumber -= 1;
          },
          addLevel: (state, action)  => {
            state.user.level = action.payload;
        },
          resetCarrots: (state) => {
            state.user.carrotNumber = 5
        },
        displayPopup: (state, action) => {
          state.levelup = action.payload;
        }
      }, 
      extraReducers: (builder) => {
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        builder.addCase(postUser.rejected, (state) => {
            state.error = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.error = true;
        });
        builder.addCase(modifyUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        builder.addCase(modifyUser.rejected, (state) => {
            state.error = true;
        });
      }
  }); 
  
  export const { addUuid, addXp, resetGame, handleCorrectAnswer, handleWrongAnswer, addLevel, resetCarrots, displayPopup } = user.actions;
  export default user.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk( 
    'fetchQuestions', 
    async (value, thunkAPI) => { 
        const data = await fetch(`${value}`); 
        const questions = await data.json();
        return questions;
    } 
  ) 

const initialState = { questions: [], carrots: 5, error: false, loading: true, gamestarted: false };

export const questions = createSlice( { 
      name:'questions', 
      initialState,
      reducers: {
        answerQuestion: (state) => { 
            state.questions.shift() 
        },
        startGame: (state) => {
          state.gamestarted = true;
        },
        endGame: (state) => {
          state.gamestarted = false;
        }
      }, 
      extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchQuestions.rejected, (state) => {
        state.error = true;
        });
      }
  }); 
  
  export const { answerQuestion, getQuestion, startGame, endGame } = questions.actions;
  export default questions.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk( 
    'fetchQuestions', 
    async (value, thunkAPI) => { 
        const data = await fetch(`${value}`); 
        const questions = await data.json();
        return questions;

        /* return [{
          "id": 43,
          "translations": [
          {
          "options": [
          {
          "label": "A",
          "option": "`[\"L\", \"y\", \"d\", \"i\", \"a\"]`"
          },
          {
          "label": "B",
          "option": "`[\"Lydia\"]`"
          },
          {
          "label": "C",
          "option": "`[[], \"Lydia\"]`"
          },
          {
          "label": "D",
          "option": "`[[\"L\", \"y\", \"d\", \"i\", \"a\"]]`"
          }
          ],
          "question": "What does this return?",
          "answer": "A",
          "explanation": "A string is an iterable. The spread operator maps every character of an iterable to one element."
          }
          ],
          "code": "[...'Lydia'];"
      },
      {
        "id": 43,
        "translations": [
        {
        "options": [
        {
        "label": "A",
        "option": "`[\"L\", \"y\", \"d\", \"i\", \"a\"]`"
        },
        {
        "label": "B",
        "option": "`[\"Lydia\"]`"
        },
        {
        "label": "C",
        "option": "`[[], \"Lydia\"]`"
        },
        {
        "label": "D",
        "option": "`[[\"L\", \"y\", \"d\", \"i\", \"a\"]]`"
        }
        ],
        "question": "What does this return?",
        "answer": "A",
        "explanation": "A string is an iterable. The spread operator maps every character of an iterable to one element."
        }
        ],
        "code": "[...'Lydia'];"
    },{
      "id": 43,
      "translations": [
      {
      "options": [
      {
      "label": "A",
      "option": "`[\"L\", \"y\", \"d\", \"i\", \"a\"]`"
      },
      {
      "label": "B",
      "option": "`[\"Lydia\"]`"
      },
      {
      "label": "C",
      "option": "`[[], \"Lydia\"]`"
      },
      {
      "label": "D",
      "option": "`[[\"L\", \"y\", \"d\", \"i\", \"a\"]]`"
      }
      ],
      "question": "What does this return?",
      "answer": "A",
      "explanation": "A string is an iterable. The spread operator maps every character of an iterable to one element."
      }
      ],
      "code": "[...'Lydia'];"
        }] */
    } 
  ) 

const initialState = { questions: [], carrots: 5, error: false, loading: true };

export const questions = createSlice( { 
      name:'questions', 
      initialState,
      reducers: {
        answerQuestion: (state) => { 
            state.questions.shift() 
            state.carrots -= 1;
        },
      }, 
      extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchQuestions.pending, (state) => {
            state.carrots = 15;
        })
        builder.addCase(fetchQuestions.rejected, (state) => {
        state.error = true;
        });
      }
  }); 
  
  export const { answerQuestion, getQuestion } = questions.actions;
  export default questions.reducer;
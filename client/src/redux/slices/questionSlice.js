export const fetchQuestions = createAsyncThunk( 
    'fetchQuestions', 
    async (thunkAPI) => { 
        const data = await fetch(`https://penguinproject-server.herokuapp.com/questions`); 
        const questions = await data.json();
        return questions;
    } 
  ) 

const initialState = { questions: [a, b, c, d, e], carrots: 5, error: false };

export const questions = createSlice( { 
      name:'questions', 
      initialState,
      reducers: {
        answerQuestion: (state) => { state.questions.shift() },
        getQuestion: (state) => { return state.questions[1] },

      }, 
      extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        })
        builder.addCase(fetchQuestions.rejected, (state) => {
        state.error = true;
        });     
      }
  }); 
  
  export const { answerQuestion, getQuestion } = questions.actions;
  export default questions.reducer;
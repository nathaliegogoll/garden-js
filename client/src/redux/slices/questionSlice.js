export const fetchQuestions = createAsyncThunk( 
    'fetchQuestions', 
    async (thunkAPI) => { 
        const data = await fetch(`https://penguinproject-server.herokuapp.com/questions`); 
        const questions = await data.json();
        return questions;
    } 
  ) 

const initialState = { questions: [], error: false };

export const questions = createSlice( { 
      name:'questions', 
      initialState,
      reducers: {
          
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
  
  export const { clearQuestions } = questions.actions;
  export default questions.reducer;
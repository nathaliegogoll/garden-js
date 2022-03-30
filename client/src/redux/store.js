import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        questions: questionReducer,
        userAuth: authReducer,
        user: userReducer,
    }
  })
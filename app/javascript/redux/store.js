import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './components/greetingReducer';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
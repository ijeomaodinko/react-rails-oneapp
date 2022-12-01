import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
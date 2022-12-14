import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: {},
};

const FETCH_GREETING = 'FETCH_GREETING';
const apiUrl = 'http://127.0.0.1:3000/api/v1/greetings'

// eslint-disable-next-line
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case `${FETCH_GREETING}/fulfilled`:
      return { ...state, greeting: action.payload };
    default: return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const Response = await fetch(apiUrl);
  const result = await Response.json();
  return result;
});


export default greetingReducer;

import { createAsyncThunk } from '@reduxjs/toolkit';

// define action
const FETCH_GREETING = 'FETCH_GREETING'

apiUrl = 'http://127.0.0.1:3000/api/v1/greetings'

//action creators
export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async() => {
    const Response = await fetch(apiUrl);
    const result = await Response.json();
    return  result;
});



const initialState = {
    message: {},
};

// reducers 
export const greetingReducer = (state =initialState, action) => {
    switch (action.type) {
        case FETCH_GREETING
        return { ...state, greetings:action.payload };
    default: return state;
    }
};

export default greetingReducer;
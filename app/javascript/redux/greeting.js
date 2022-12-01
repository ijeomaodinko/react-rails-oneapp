import { createAsyncThunk } from '@reduxjs/toolkit';

// define action
const FETCH_GREETING = 'FETCH_GREETING'

apiUrl = 'http://127.0.0.1:3000/api/v1/greetings'

const initialState = {
    message: {},
};

// reducers 
export const greetingReducer = (state =initialState, action) => {
    switch (action.type) {
        case FETCH_GREETING:
        return { ...state, message: action.payload };
    default: return state;
    }
};
//action creators
export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async() => {
    const Response = await fetch(apiUrl);
    const result = await Response.json();
    return  result;
});



export default greetingReducer;
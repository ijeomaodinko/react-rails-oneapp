import * as React from 'react'
import * as ReactDom from 'react-dom'

// define action
const FETCH_GREETING = 'FETCH_GREETING'

apiUrl =  

export async function fetchGreeting(dispatch, getState) {
    const response = await client.get('apiUrl')
    dispatch({ type: 'FETCH_GREETING', payload: response.greetings })
}



const initialState = {
    message: []
}

// reducers 

export const greetingReducer = (state =initialState, action) => {
    switch (action.type) {
        case FETCH_GREETING
        return {
            ...state,
        greetings: [
            ...state.message,
        ]
     }
    default:
        return state

    }
}


const Hello = () => {
    return(
        <div className='container'>
        <h1>Hello Rails React!</h1>
        </div>
    )
}
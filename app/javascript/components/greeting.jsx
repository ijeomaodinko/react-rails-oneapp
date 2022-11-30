import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/greeting';

const Greeting = () => {
const greetingRender = useSelector((state) => state.greetings.message);
const dispatch = useDispatch();

    return(
        <div className='container'>
        <h1>Random Greeting</h1>
        <p>{greetingRender.message}</p>
        <button type="button" onClick={() => dispatch(fetchGreeting())}> Another Greeting</>
        </div>
    )
}

export default Greeting;
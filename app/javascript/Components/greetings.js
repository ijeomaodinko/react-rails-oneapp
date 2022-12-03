import React from "react";
import { useSelector } from "react-redux";
const Greetings = () => {
    const greeting = useSelector((state) => state.greetingReducer.greeting);

  return (
    <div>
    <h1>Random Greetings</h1>
   <div>{greeting.message}</div>
    </div>
  );
};
export default Greetings
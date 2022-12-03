import React from 'react';
import {
    Routes,
    Route,
  } from 'react-router-dom';
  import Greetings from './Components/greetings';
  const Router = () => (
    <>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </>
  );

  export default Router;
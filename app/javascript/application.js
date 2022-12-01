// // Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './router';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import {fetchGreeting} from './components/greeting'

store.dispatch(fetchGreeting());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

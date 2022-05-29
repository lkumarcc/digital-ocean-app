import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoContainer from "./components/TodoContainer";
import About from './components/About/AboutTodoContainer';
import CoreTenets from './components/CoreTenets/CoreTenetsToDoContainer';
import ReachUs from './components/ReachUs/ReachUsTodoContainer';
import Donate from './components/Donate/DonateTodoContainer';
import { BrowserRouter } from 'react-router-dom';

/*
const element = <h1>
  Hello from Create React App
</h1>
*/
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//React.StrictMode
reportWebVitals();

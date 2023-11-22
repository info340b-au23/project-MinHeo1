import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './Components/App';
import data from './data/fantasy.json';
import teams from './data/teamList.json'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} divisions={teams.divisions} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

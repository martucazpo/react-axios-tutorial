import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/courses/'
});

function App() {

function getdata(){
  api.get('/').then(res => {
    console.log(res.data);
  });
}
getdata();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

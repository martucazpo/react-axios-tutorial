import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';


function App() {

  const [data, setData] = useState([]);

  API.getData().then(
    data =>  setData(data.data)
  ).catch(err => console.log(err));
  
  return (
    <div className="App">
      <header className="App-header">
        {data.map(data => <h2 key={data.id}>{data.title}</h2>)}
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

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';


function App() {

  const [data, setData] = useState([]);

  const getStuff = () => {
    API.getData().then(
      data =>  setData(data.data)
    ).catch(err => console.log(err));
  };

  const addStuff = () => {
    API.createCourse().then(
      getStuff()
    ).catch(err => console.log(err));
  };

  const getRidOfStuff = (id) => {
    API.deleteCourse(id).then(
    getStuff()
    ).catch(err => console.log(err));
  };

  const updateStuff = (id, val) => {
    API.updateCourse(id, { title: val })
    .then(
      getStuff()
    ).catch(err => console.log(err));
  };

  useEffect(() => {
    getStuff();
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addStuff}>Create Course</button>
        {data.map(data => <h2 key={data.id} onClick={() => updateStuff(data.id, `${data.title}a`)}>{data.title}<button onClick={() => getRidOfStuff(data.id)}>X</button></h2>)}
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

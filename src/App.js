import React from "react";
import Form from './Form'; // Importing Form component
import Weather from './Weather'; // Importing Weather component

import './App.css';

function App() {
  return (
    <div className="App">
      <title>The Weather App</title>

        <div className="container">
          <Form />
          <Weather />
          This project was coded by <a href="https://www.linkedin.com/in/eva-machova/">Eva Machova</a>, is <a href="https://github.com/eva-coding/shecodes-react-weather">open-sourced</a> and hosted on <a href="https://grand-truffle-3f89c7.netlify.app/">Netlify</a>.
        </div>
    </div>
  );
}

export default App;

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
          This project was coded by <a href="https://www.linkedin.com/in/eva-machova/">Eva Machova</a>, is open-sourced and hosted on Netlify.
        </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Form.css";

export default class Form extends React.Component { // Changed from WeatherApp to Form
  render() {
    return (
      <form action="submit" className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a location"
          autoFocus // Change 'autofocus' to 'autoFocus' for React
          autoComplete="off" // Change 'autocomplete' to 'autoComplete' for React
          id="city-input"
          className="form-control shadow-sm" // Change 'class' to 'className' for React
        />
        <input type="submit" value="Search" />
        <button id="position">Current Location</button>
      </form>
    );
  }
}
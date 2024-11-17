import React from "react";
import "./Weather.css";

export default class Weather extends React.Component {
  render = () => {
    return (
      <div className="current-weather">
        <div className="row">
          <div className="col-md-6">
            <span className="temperature-now">
              <span className="current-icon">
                <p className="icon" id="icon">
                  ☀️
                </p>
              </span>
              <div className="value-now">
                <span className="temperature" id="temperature-now">10</span>
                <span className="units"> °C </span>
              </div>
            </span>
          </div>
          <div className="col-md-6">
            <div className="location">
              <h1 id="new-city">Derby</h1>
              <h4 className="last-updated">Last updated: Sunday 16:32</h4>
              <h4 id="description">Sunny</h4>
              <h5>
                <strong>Humidity:</strong>
                46% |
                <strong> Wind: </strong>
                25 km/h
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

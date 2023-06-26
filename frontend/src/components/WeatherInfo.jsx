import React from "react";
import Rain from "../assets/pngwing.com.png";
const WeatherInfo = () => {
  return (
    <div className="weather-section">
      <div className="weather-info-dash-timer-notes">
        <div>
          <p>25-6-2023</p>
        </div>
        <div>
          <p>4.58PM</p>
        </div>
      </div>
      <div className="weather-details-dash-timer-notes">
        <div>
          <img src={Rain} alt="" width={"150px"} />
          <p>heavy rain</p>
        </div>
        <hr />
        <div>
          <p>24C</p>
          <p>1010 mbar</p>
          <p>pressure</p>
        </div>
        <hr />
        <div>
          <div>
            <img src="" alt="" />
            <p>3.7KM/h</p>
            <p>wind</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>83%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;

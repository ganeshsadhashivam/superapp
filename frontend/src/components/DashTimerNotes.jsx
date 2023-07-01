import React, { useEffect, useState } from "react";
import "./Dashtimernotes.css";
import UserImage from "../assets/image 14.png";
import Rain from "../assets/pngwing.com.png";
import Everest from "../assets/everest.jpeg";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { CgDropOpacity } from "react-icons/cg";
const DashTimerNotes = () => {
  const [weatherData, setweatherData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2023-06-30&to=2023-06-30&sortBy=popularity&apiKey=817cfeaa762345c283dbf3e1175159fb`
    )
      .then((response) => response.json())
      .then((response) => setNewsData(response.articles))
      // .then((response) => console.log(response))

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(newsData);

  const featchWeather = () => {
    console.log("in fet m");
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=00bba34c26a44ef0951140333233006&q=pune&aqi=no`
    )
      .then((response) => response.json())
      .then((response) => setweatherData(response.current))
      // .then((response) => console.log(response))

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    featchWeather();
  }, []);
  console.log(weatherData);
  return (
    <div className="dash-timer-notes-page">
      <div className="user-page-bg-dash-timer-notes">
        <div className="user-page-layout-dash-timer-notes">
          <div className="user-general-info">
            <div className="user-details-dash-timer-notes">
              <img src={UserImage} alt="" id="useravatar" />
              <div className="user-info-dash-timer-notes">
                <div>
                  <p id="username-dash-timer-notes">ganesh</p>
                </div>
                <div>
                  <p id="email-dash-timer-notes">
                    ganeshsadhashivam@outlook.com
                  </p>
                </div>
                <div>
                  <p id="name-dash-timer-notes">ganesh</p>
                </div>
                <div className="movie-categories-dash-timer-notes">
                  <div>
                    <p>horror</p>
                  </div>
                  <div>
                    <p>thriller</p>
                  </div>
                  <div>
                    <p>action</p>
                  </div>
                  <div>
                    <p>fiction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="weather-section">
            <div className="weather-info-dash-timer-notes">
              <div>
                {/* <p>25-6-2023</p> */}
                <p>{weatherData.last_updated?.substring(0, 10)}</p>
              </div>
              <div>
                {/* <p>4.58PM</p> */}
                <p>{weatherData.last_updated?.substring(10)}</p>
              </div>
            </div>
            <div className="weather-details-dash-timer-notes">
              <div>
                <img src={weatherData.condition?.icon} alt="" width={"150px"} />
                {/* <p>heavy rain</p> */}
                <p>{weatherData.condition?.text}</p>
              </div>
              <hr />
              <div>
                {/* <p>24C</p> */}
                {/* <p>1010 mbar</p> */}
                <p>{weatherData?.temp_c} ℃</p>
                <CiTempHigh />
                <p>{weatherData?.pressure_mb} mbar</p>
                <p>pressure</p>
              </div>
              <hr />
              <div>
                <div>
                  <img src="" alt="" />
                  {/* <p>3.7KM/h</p> */}
                  <FaWind />
                  <p>{weatherData?.wind_kph}km/h</p>
                  <p>wind</p>
                </div>
                <div>
                  <img src="" alt="" />
                  {/* <p>83%</p> */}
                  <CgDropOpacity />
                  <p>{weatherData?.humidity} %</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="notes-taking">
            <div>
              <p>All notes</p>
              {/* <p>This is how i am going to learn MERN stack in 3 Months</p> */}
              <textarea
                name=""
                id="textarea"
                cols="60"
                rows="31"
                placeholder="This is how i am going to learn MERN stack in 3 Months"
              >
                {/* <p>All notes</p>
                <p>This is how i am going to learn MERN stack in 3 Months</p> */}
              </textarea>
            </div>
          </div>
          <div>
            <div className="timer-section">
              <div className="timer-border">
                <img src="" alt="" />
                <p>10:41:55AM</p>
              </div>
              <div className="hr-min-sec">
                <div>
                  <p>Hour</p>
                  <FiChevronUp />
                  <p>03 :</p>
                  <FiChevronDown />
                </div>
                <div>
                  <p>Minutes</p>
                  <FiChevronUp />
                  <p>32 :</p>
                  <FiChevronDown />
                </div>
                <div>
                  <p>seconds</p>
                  <FiChevronUp />
                  <p>55</p>
                  <FiChevronDown />
                  <div>
                    <button id="start-btn">start</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nature-dash-timer-notes">
          <div>
            <aside>
              {/* <div>
                <img src={Everest} alt="" />
              </div> */}
              <div>
                <figure>
                  {/* <img src={Everest} alt="" /> */}
                  <img src={newsData[7].urlToImage} alt="" />
                  <figcaption>
                    <div>
                      <div>
                        <p>Want to climb Mount Everest?</p>
                      </div>
                      <div className="date-time-in-nature">
                        <div>
                          <p>25-6-2023</p>
                        </div>
                        {/* <hr id="hr" /> */}
                        <span>|</span>
                        <div>
                          <p>7.28PM</p>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* <div className="nature-short-info-dash-timer-notes">
                <div>
                  <p>Want to climb Mount Everest?</p>
                </div>
                <div className="date-time-in-nature-dash-timer-notes">
                  <div>
                    <p>25-6-2023</p>
                  </div>
                  <hr />
                  <div>
                    <p>7.28PM</p>
                  </div>
                </div>
              </div> */}
              <div className="nature-info-dash-timer-notes">
                <p>
                  In the years since human beings first reached the summit of
                  Mount Everest in 1953, climbing the world’s highest mountain
                  has changed dramatically. Today, hundreds of mountaineers
                  manage the feat each year thanks to improvements in knowledge,
                  technology, and the significant infrastructure provided by
                  commercially guided expeditions that provide a veritable
                  highway up the mountain for those willing to accept both
                  the......
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div id="browse">
        <button>Browse</button>
      </div>
    </div>
  );
};

export default DashTimerNotes;

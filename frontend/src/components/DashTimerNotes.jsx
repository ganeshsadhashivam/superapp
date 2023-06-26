import React from "react";
import "./Dashtimernotes.css";
import UserImage from "../assets/image 14.png";
import Rain from "../assets/pngwing.com.png";
import Everest from "../assets/everest.jpeg";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
const DashTimerNotes = () => {
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
        </div>

        <div>
          <div className="notes-taking">
            <div>
              <p>All notes</p>
              <p>This is how i am going to learn MERN stack in 3 Months</p>
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
              <div>
                <img src={Everest} alt="" />
              </div>
              <div className="nature-short-info-dash-timer-notes">
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
              </div>
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

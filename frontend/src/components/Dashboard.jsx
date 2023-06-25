import React from "react";
import "./Dashboard.css";
import UserImage from "../assets/image 14.png";
import Rain from "../assets/pngwing.com.png";
import Everest from "../assets/everest.jpeg";
const Dashboard = () => {
  return (
    <div className="user-page-bg">
      <div className="user-page-layout">
        <div>
          <div className="user-details">
            <img src={UserImage} alt="" id="useravatar" />
            <div className="user-info">
              <div>
                <p id="username">ganesh</p>
              </div>
              <div>
                <p id="email">ganeshsadhashivam@outlook.com</p>
              </div>
              <div>
                <p id="name">ganesh</p>
              </div>
              <div className="movie-categories">
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
          <div className="weather-info">
            <div>
              <p>25-6-2023</p>
            </div>
            <div>
              <p>4.58PM</p>
            </div>
          </div>
          <div className="weather-details">
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
      <div className="nature">
        <div>
          <aside>
            <div>
              <img src={Everest} alt="" />
            </div>
            <div className="nature-short-info">
              <div>
                <p>Want to climb Mount Everest?</p>
              </div>
              <div className="date-time-in-nature">
                <div>
                  <p>25-6-2023</p>
                </div>
                <hr />
                <div>
                  <p>7.28PM</p>
                </div>
              </div>
            </div>
            <div className="nature-info">
              <p>
                In the years since human beings first reached the summit of
                Mount Everest in 1953, climbing the world’s highest mountain has
                changed dramatically. Today, hundreds of mountaineers manage the
                feat each year thanks to improvements in knowledge, technology,
                and the significant infrastructure provided by commercially
                guided expeditions that provide a veritable highway up the
                mountain for those willing to accept both the......
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

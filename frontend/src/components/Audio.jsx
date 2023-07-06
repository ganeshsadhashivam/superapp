import React, { Component } from "react";
import MP3 from "../assets/Time up S7.mp3";
class Audio extends Component {
  componentDidMount() {
    console.log("hi");
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
          {/* <source src={MP3}></source> */}
        </audio>
      </div>
    );
  }
}

export default Audio;

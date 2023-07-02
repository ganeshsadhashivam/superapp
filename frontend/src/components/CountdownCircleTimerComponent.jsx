import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./CountdownCircle.css";
const CountdownCircleTimerComponent = () => {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    } else {
      return <diV>{remainingTime}</diV>;
    }
  };
  return (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[10, 6, 3, 0]}
      onComplete={() => ({ shouldRepeat: true, delay: 1 })}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default CountdownCircleTimerComponent;

import React, { useState } from "react";
import "./Clock.css";
const Clock = () => {
  let time = new Date().toLocaleTimeString();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let am=hours>=12?"PM":"AM";



  const [second, setSecond] = useState(seconds);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setSecond(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="clock">
      <div className="round" style={{border:"3px solid #ff00d9"}}>
        <h2>{hours}</h2>
        <p>hours</p>
      </div>
      <div className="round" style={{border:"3px solid yellow"}}>
        <h2>{minutes}</h2>
        <p>minutes</p>
      </div>
      <div className="round" style={{border:"3px solid #34ff01"}}>
        <h2>{seconds}</h2>
        <p>seconds</p>
      </div>
      <div className="format">
        <h2 id="meri">{am}</h2>
       
      </div>
    </div>
  );
};

export default Clock;

import React, { useState, useEffect } from "react";
export default function pomodoro() {

  // TIME STATES
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  // TIMER STATE
  const [isRunning, setIsRunning] = useState(false);

  // USE EFFECT TIMER
  useEffect(() => {

    let timer;

    if (isRunning) {
      timer = setInterval(() => {

        if (seconds > 0) {
          setSeconds(seconds - 1);

        } else {

          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);

          } else {
            clearInterval(timer);
            setIsRunning(false);
            alert("Pomodoro session finished!");
          }
        }

      }, 1000);
    }

    return () => clearInterval(timer);

  }, [isRunning, minutes, seconds]);

  // START TIMER
  const startTimer = () => {
    setIsRunning(true);
  };

  // PAUSE TIMER
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // RESET TIMER
  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="pomodoro-container">

      <h1>Pomodoro Timer</h1>

      {/* TIMER DISPLAY */}
      <div className="timer">

        <span>
          {String(minutes).padStart(2, "0")}
        </span>

        :

        <span>
          {String(seconds).padStart(2, "0")}
        </span>

      </div>

      {/* BUTTONS */}
      <div className="pomodoro-buttons">

        <button onClick={startTimer}>
          Start
        </button>

        <button onClick={pauseTimer}>
          Pause
        </button>

        <button onClick={resetTimer}>
          Reset
        </button>

      </div>

    </div>
  );
}

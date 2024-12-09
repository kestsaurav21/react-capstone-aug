import React, { useState, useEffect } from 'react';
import './Timer.css'
function Timer() {
  const [time, setTime] = useState({
    hours: 5,
    minutes: 8,
    seconds: 56,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            if (prevTime.minutes === 0) {
              if (prevTime.hours === 0) {
                clearInterval(intervalId);
                return prevTime;
              } else {
                return {
                  ...prevTime,
                  hours: prevTime.hours - 1,
                  minutes: 59,
                  seconds: 59,
                };
              }
            } else {
              return {
                ...prevTime,
                minutes: prevTime.minutes - 1,
                seconds: 59,
              };
            }
          } else {
            return {
              ...prevTime,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };
  return (
    <div className="timer">
      <div className='timer1'>
        <div className='time-div'>
        <span className='time1'>{time.hours.toString().padStart(2, '0')}:</span>
        <span className='time1'>{time.minutes.toString().padStart(2, '0')}:</span>
        <span className='time1'>{time.seconds.toString().padStart(2, '0')}</span>
        </div>
      </div>
      <div className="time-head">
        <div className='time-head-div'>
        <span className='time-head1'>{`${time.hours.toString().padStart(2, '0')}  :`}</span>
        <span className='time-head1'>{`${time.minutes.toString().padStart(2, '0')} :`}</span>
        <span className='time-head1'>{time.seconds.toString().padStart(2, '0')}</span>
        </div> 
      </div>
      <div className="controls">
        <button onClick={handleStart} className="controls1">Start</button>
      </div>
    </div>
  );
}

export default Timer;

import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState( false);



    useEffect(() => {
        handleStart();
        return () => clearInterval(timeRef.current);
    },)

    const timeRef = useRef();

    const handleStart = () => {
      timeRef.current =  setInterval(() => {
            setSeconds(seconds + 1)

            if (seconds === 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        }, 1000)
    }

    const handleReset = () => {
        setMinutes(0)
        setSeconds(0)
    }
    return (
        <div>
            <h1 className="timer__title">Timer</h1>
            {/* <h1 className="timer__title">{timerRef.current}</h1> */}
            <h1 className="timer">{minutes < 10 ? "0"+ minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
            <button onClick={handleReset} className="reset">Reset</button>
            <button onClick={handleStart} className="reset">Start</button>
        </div>
    )
}

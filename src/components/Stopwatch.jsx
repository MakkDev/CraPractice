import React, { useEffect, useRef, useState } from 'react'

let fullTimer = "";
let timerSeconds = 0
let timerMinutes = 0
let timerFunction = null

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const timeRef = useRef();

    useEffect(() => {
        handleStart();
        return () => clearInterval(timeRef.current);
    },)


    const handleStart = () => {
        var minutes = timerMinutes
        var seconds = timerSeconds
        if(timerMinutes < 10) {
            minutes = "0" + timerMinutes
        }
        if(timerSeconds < 10) {
            seconds = "0" + timerSeconds
        }
        timeRef.current = setInterval(() => {
            seconds++
            fullTimer = minutes + ":" + seconds
            if (seconds === 59) {
                minutes++
                seconds = 0
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
            <h1 className="timer__title">{timeRef.current}</h1>
            {/* <h1 className="timer">{minutes < 10 ? "0"+ minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1> */}
            <button onClick={handleReset} className="reset">Reset</button>
            <button onClick={handleStart} className="reset">Start</button>
        </div>
    )
}

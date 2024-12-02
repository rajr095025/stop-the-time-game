import { useRef, useState } from "react"
import ResultModal from "./ResultModal";


// let timer;

export default function TimerChallege ({title,targetTime}){
    
    // let timer;

    // use ref for timer 
    let timer = useRef();
    let dialogRef = useRef();

    // const [timerStarted , setTimerStarted] = useState(false);
    // const [timerExpired , setTimerExpired] = useState(false);
    const [remainingTime , setRemainingTime] = useState(targetTime * 1000);

    let timerRunning = remainingTime > 0 && remainingTime < targetTime * 1000;

    if(remainingTime <= 0){
        clearTimeout(timer.current);
        dialogRef.current.open();
    }

    const resetTimer = () => {
        setRemainingTime(targetTime * 1000);
    }

    const timerStartFunction = () => {
        // setTimerStarted(true);
        timer.current = setInterval(() => {
            // setTimerExpired(true)
            // dialogRef.current.showModal();
            // dialogRef.current.open();
            setRemainingTime((prevTime) => prevTime - 10);
        },10)
    }

    
    const timerStopFunction = () => {
        // setTimerStarted(false)
        clearTimeout(timer.current);
        dialogRef.current.open();
        // resetTimer();
    }

    return <>
    <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={remainingTime} resetTimer={resetTimer}/>
        <section className="challenge">
        <h2>{title}</h2>
        {/* <p>{timerExpired ? "You lost!" : ""}</p>
         */}
        <p>
            {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
            <button onClick={timerRunning ? timerStopFunction  :  timerStartFunction}>
                {timerRunning ? "Stop" : "Start"} Challenge
            </button>
        </p>
        <p className={timerRunning ? "active" : ""}>
        {timerRunning ? "Timer is running" : "Timer Inactive"} 
        </p>
    </section>
    </>
    

}
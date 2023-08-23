import { useEffect, useState } from "react";

export const Timer = () => {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    
    useEffect(() => {
        if (isRunning === true){
            let timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000);
            return (() => clearInterval(timer))
        }
    },[isRunning])
    
    const toggleRunning = () => {
        if (isRunning === true){
            setIsRunning(false)
        }
        else {
            setIsRunning(true)
        }
    }

    const resetTimer = () => {
        setIsRunning(false)
        setTime(0)
    }

    return (
        <div>
            <h4>Timer:</h4>
            <h3>{time}</h3>
            <button onClick={() => {toggleRunning()}}>
                {
                    isRunning ? 'Stop' : 'Start'
                }
            </button>
            <button onClick={() => {resetTimer()}}>Reset</button>
        </div>
    )
}
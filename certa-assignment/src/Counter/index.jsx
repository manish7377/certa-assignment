import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalTimer, setIntervalTimer] = useState();

  const handleStartStop = () => setIsRunning(prev=>!prev);
  const handleReset = () => {
    handleStartStop()
    setCounter(0);
  };

  useEffect(() => {
    if (isRunning) {
      setIntervalTimer(
        setInterval(() => {
          setCounter((prev) => prev + 1);
        }, 1000)
      );
    }else{
        clearInterval(intervalTimer);
    }

    return () => clearInterval(intervalTimer);
  }, [isRunning]);

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

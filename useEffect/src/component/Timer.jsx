import { useState, useEffect } from "react";

export function Timer() {
  const [count, setCount] = useState(0);
//   const [pause, setPause] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCount(count => (count + 1));
    }, 1000);
    
  }, [count]);

  return (
    <>
      <h1>Timer</h1>
      <p>{count}</p>
      <button>Start</button>
      <button>Stop</button>
      <button>Nulstil</button>
    </>
  );
}

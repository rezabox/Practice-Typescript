import React, { useState } from 'react'
import './Controls.css';
type Props = {
    TimeInSeconds:Function;
}
function Controls(props:Props) {
  const { TimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  const  handleStart = (e: object)=>{
       let interval:any =  setInterval(()=> {
        TimeInSeconds((prev:number) => prev + 1);
      },1000);
      setIntervalId(interval);
  }
  const handleStop = ()=>{
      clearInterval(intervalId);
  }
  const handleReset = ()=>{
    clearInterval(intervalId);
    TimeInSeconds(0);
  }
  return (
    <section>
       <div className="btns">
       <button className='start' onClick={handleStart}>Start</button>
        <button className='stop' onClick={handleStop}>Stop</button>
        <button className='reset' onClick={handleReset}>Reset</button>
       </div>
    </section>
  )
}

export default Controls

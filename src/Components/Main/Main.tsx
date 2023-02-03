import React, { useEffect, useState } from 'react';
import Controls from '../Controls/Controls';
import calculate from '../Help/Calculate';
import './Main.css';
function Main() {
  const [timeInSeconds, TimeInSeconds] =  useState(0);
  const [timeArray, setTimeArray] = useState<Array<number|string>>([]);
  useEffect(()=>{
     setTimeArray(calculate(timeInSeconds));
  }, [timeInSeconds])
  return (
      <section className='time-container'>
         <p className='timer-text'>{timeArray[0]}</p>
         <span>:</span>
         <p className='timer-text'>{timeArray[1]}</p>
         <span>:</span>
         <p className='timer-text'>{timeArray[2]}</p>
         <Controls TimeInSeconds={TimeInSeconds}/>
      </section>
  )
}
export default Main;

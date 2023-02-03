import React from 'react'

function calculate(timeSeconds:number):Array<number|string> {
  let hours:number = Math.floor(timeSeconds / 3600);
  let minute:number = Math.floor((timeSeconds - (hours * 3600)) / 60);
  let seconds:number = timeSeconds - (hours * 3600) - (minute * 60); 
  return [
         hours < 10 ? `0${hours}` : hours,
         minute < 10 ? `0${minute}` : minute,
         seconds < 10 ? `0${seconds}` : seconds
  ];
}
export default calculate;

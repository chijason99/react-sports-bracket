import React from "react";
import MatchInfo from "./MatchInfo";
import {v4 as uuid } from 'uuid'
export default function RoundColumn({ num, name }) {
  const numAry = [...Array(num).keys()];
  let numClass
  switch (num) {
    case 8:
        numClass = 'roundOf16'
        break
    case 4:
        numClass = 'quarterFinal';
        break
    case 2:
        numClass = 'semiFinal';    
        break
    case 1:
        numClass = 'final';
        break
    default:
        break;
  }
  return (
    <div className={`matchInfoGridContainer ${numClass}`}>
      <p>{name}</p>
      {numAry.map(() => (
        <MatchInfo key={uuid()} />
      ))}
    </div>
  );
}

import React from "react";

export default function TeamInfo(props) {
  const { team1, team2, fullTime, extraTime, penalties, winner } = props.teamInfo;
  const team1Win = team1 === winner
  return (
    <>
      <tr>
        <td className={team1Win ? '' : 'loser'}>{team1}</td>
        <td>{fullTime[0]}</td>
        {props.hasExtraTime && <td>{extraTime[0]}</td>}
        {props.hasPenalties && <td>{penalties[0]}</td>}
      </tr>
      <tr>
        <td className={team1Win? 'loser' : ''}>{team2}</td>
        <td>{fullTime[1]}</td>
        {props.hasExtraTime && <td>{extraTime[1]}</td>}
        {props.hasPenalties && <td>{penalties[1]}</td>}
      </tr>
    </>
  );
}

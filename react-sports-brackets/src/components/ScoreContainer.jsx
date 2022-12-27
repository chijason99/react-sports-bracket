import React, { useEffect, useState } from "react";

export default function ScoreContainer(props) {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const {getScore, isSaved} = props
  useEffect(() => {
    getScore([team1Score,team2Score])
  },[isSaved])  
  return (
    <div className="scoreContainer">
      {props.children}
      <div className="score">
        <input
          type="number"
          required
          placeholder="team1"
          min={0}
          onChange={(e) => setTeam1Score(parseInt(e.target.value))}
          value={team1Score}
        />
        <span>:</span>
        <input
          type="number"
          required
          placeholder="team2"
          min={0}
          onChange={(e) => setTeam2Score(parseInt(e.target.value))}
          value={team2Score}
        />
      </div>
    </div>
  );
}

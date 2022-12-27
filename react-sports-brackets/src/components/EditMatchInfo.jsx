import React, { useState } from "react";
import ScoreContainer from "./ScoreContainer";
export default function EditMatchInfo(props) {
  const [show120, setShow120] = useState(false);
  const [showPk, setShowPk] = useState(false);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [winner, setWinner] = useState("");
  const [fullTime, setFullTime] = useState([]);
  const [extraTime, setExtraTime] = useState([]);
  const [penalties, setPenalties] = useState([]);
  const [matchDate, setMatchDate] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [data, setData] = useState({});
  const { handleGetMatchInfo, handleCloseEditForm } = props;
  function handelFormSubmit(e) {
    e.preventDefault();
    const data = {
      team1,
      team2,
      matchDate,
      winner: winner || team1,
      fullTime,
      extraTime,
      penalties,
    };
    setData(data);
    handleGetMatchInfo(data);
    handleCloseEditForm();
  }
  function handleSelectGameEnd(e) {
    switch (e.target.value) {
      case "120":
        setShow120(true);
        setShowPk(false);
        break;
      case "pk":
        setShow120(true);
        setShowPk(true);
        break;
      default:
        setShow120(false);
        setShowPk(false);
        break;
    }
  }
  function handleSelectWinner(e) {
    if (e.target.value === "team1") {
      setWinner(team1);
    } else if (e.target.value === "team2") {
      setWinner(team2);
    }
  }
  function getFullTimeScore(ary) {
    setFullTime(ary);
  }
  function getExtraTimeScore(ary) {
    setExtraTime(ary);
  }
  function getPenaltiesScore(ary) {
    setPenalties(ary);
  }
  return (
    <div className="editMatchInfoFormContainer">
      <form className="editMatchInfoForm" onSubmit={handelFormSubmit}>
        <input
          type="text"
          placeholder="Team1"
          required
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team2"
          required
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
        />
        <label htmlFor="gameEnd">The game ends in :</label>
        <select
          name="gameEnd"
          id="gameEnd"
          onChange={(e) => handleSelectGameEnd(e)}
        >
          <option value="90">90 mins</option>
          <option value="120">120 mins</option>
          <option value="pk">Penalty Kicks</option>
        </select>
        {team1 && team2 && (
          <>
            <label htmlFor="winner">The winner is :</label>
            <select
              name="winner"
              id="winner"
              onChange={(e) => handleSelectWinner(e)}
            >
              <option value="team1">{team1}</option>
              <option value="team2">{team2}</option>
            </select>
          </>
        )}
        <label htmlFor="matchDate">The date of the match :</label>
        <input
          type="date"
          name="matchDate"
          id="matchDate"
          required
          onChange={(e) => setMatchDate(e.target.value)}
        />
        <ScoreContainer getScore={getFullTimeScore} isSaved={isSaved}>
          <span>Scoreline after 90mins</span>
        </ScoreContainer>
        {show120 && (
          <ScoreContainer getScore={getExtraTimeScore} isSaved={isSaved}>
            <span>Scoreline after 120mins</span>
          </ScoreContainer>
        )}
        {showPk && (
          <ScoreContainer getScore={getPenaltiesScore} isSaved={isSaved}>
            <span>Scoreline of the penalty kick</span>
          </ScoreContainer>
        )}
        <div className="editMatchInfoBtnContainer">
          <button
            type="submit"
            className="btn"
            onClick={() => setIsSaved(true)}
          >
            Save
          </button>
          <button
            type="button"
            className="btn danger"
            onClick={handleCloseEditForm}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

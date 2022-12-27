import React, { useState, useEffect } from "react";
import ReactDOM  from "react-dom";
import TeamInfo from "./TeamInfo";
import EditMatchInfo from "./EditMatchInfo";
const rootPortal = document.querySelector('#root-portal')
const DUMMY_DATA = {
  team1: "team1",
  team2: "team2",
  fullTime: [3, 2],
  extraTime: [3, 3],
  penalties: [4, 2],
  winner: "team1",
};
export default function MatchInfo() {
  const [style, setStyle] = useState({ display: "none" });
  const [isEdit, setIsEdit] = useState(false);
  const [hasExtraTime, setHasExtraTime] = useState(false);
  const [hasPenalties, setHasPenalties] = useState(false);
  const [matchInfoData, setMatchInfoData] = useState(null);
  const [isInitial, setIsInitial] = useState(true)
  useEffect(()=>{
    if(isInitial){
      setIsInitial(false)
      return
    }
    if(matchInfoData.extraTime.length > 0){
      setHasExtraTime(true)
    }
    if(matchInfoData.penalties.length > 0){
      setHasPenalties(true)
    }
  },[matchInfoData])
  function showBtn() {
    setStyle({ display: "inline-block" });
  }
  function hideBtn() {
    setStyle({ display: "none" });
  }
  function handleGetMatchInfo(data) {
    setMatchInfoData(data);
  }
  function handleCloseEditForm() {
    setIsEdit(false);
  }
  return (
    <>
      <div className={`matchInfoTableContainer ${isEdit ? 'active' : ''}`}>
        <table className="matchInfoTable">
          <thead>
            <tr>
              <th>Team name</th>
              <th>90mins</th>
              {hasExtraTime && <th>Extra time</th>}
              {hasPenalties && <th>Penalties</th>}
            </tr>
          </thead>
          <tbody>
            <TeamInfo teamInfo={matchInfoData || DUMMY_DATA} hasExtraTime={hasExtraTime} hasPenalties={hasPenalties}/>
          </tbody>
        </table>

        <div
          className="btnContainer"
          onMouseEnter={showBtn}
          onMouseLeave={hideBtn}
        >
          <button className="btn" style={style} onClick={() => setIsEdit(true)}>
            Edit
          </button>
        </div>
      </div>
      {isEdit && ReactDOM.createPortal(
        <EditMatchInfo
          handleGetMatchInfo={handleGetMatchInfo}
          handleCloseEditForm={handleCloseEditForm}
        />
      , rootPortal )}
    </>
  );
}

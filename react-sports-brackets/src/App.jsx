import CreateBracketForm from "./components/CreateBracketForm";
import "./App.css";
import { useState, useEffect } from "react";
import RoundColumn from "./components/RoundColumn";
function App() {
  const [tournamentData, setTournamentData] = useState(null);
  // const [isInitial, setIsInitial] = useState(true)
  // useEffect(() => {
  //   if(isInitial){
  //     setIsInitial(false)
  //     return
  //   }
  //   const previousData = sessionStorage.getItem('tournamentData')
  //   if(previousData != null){
  //     setTournamentData(previousData)
  //     return
  //   }
  //   sessionStorage.setItem("tournamentData", JSON.stringify(tournamentData));
  // }, [tournamentData]);
  function getFormData(data) {
    setTournamentData(data);
  }
  return (
    <>
      { !tournamentData && <CreateBracketForm getFormData={getFormData} />}
      {tournamentData && 
        <>
          <h2>{tournamentData.name}</h2>

          <div className="columnGridContainer" style={{ 'gridTemplateColumns':` repeat(${Math.log2(tournamentData.numOfPlayers)},1fr)`}}>
           {tournamentData.numOfPlayers === 16 && <RoundColumn num={8} name="Round of 16" />}
            {tournamentData.numOfPlayers >=8  && <RoundColumn num={4} name="Quarter final" />}
            { tournamentData.numOfPlayers >=4  &&<RoundColumn num={2} name="Semi final" />}
            <RoundColumn num={1} name="Final" />
          </div>
        </>
      }
    </>
  );
}

export default App;

// basic functions
// User can enter the name of the tournament
// User can enter the starting and ending dates of the tournament
// User can enter the number of teams competing in the tournament
// User can see a warning if either the starting or ending date is invalid
// User can see a warning if an odd number of competing teams is entered

// bonus
// User can enter the competing team names for each match
// User can enter the date for each match
// User can enter the final score for each match
// User can expect that this data will persist across sessions

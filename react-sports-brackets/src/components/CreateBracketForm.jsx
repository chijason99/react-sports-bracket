import React, { useState } from "react";
export default function CreateBracketForm({getFormData}) {
  const [name, setName] = useState("");
  const [numOfPlayers, setNumOfPlayers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  function handleCreateBracket(e) {
    e.preventDefault();
    getFormData({
      name,
      numOfPlayers: parseInt(numOfPlayers),
      startDate,
      endDate
    })
  }
  return (
    <form className="form" onSubmit={(e) => handleCreateBracket(e)}>
      <label htmlFor="nameOfTournament">*Name of the tournament :</label>
      <input
        type="text"
        name="nameOfTournament"
        id="nameOfTournament"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="numberOfPlayers">*Number of teams/players :</label>
      <select
        type="number"
        name="numberOfPlayers"
        id="numberOfPlayers"
        required
        defaultValue={2}
        onChange = {e => setNumOfPlayers(e.target.value)}
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
      <label htmlFor="startingDate">The start of the tournament :</label>
      <input type="date" name="startingDate" id="startingDate" value={startDate} onChange={e => setStartDate(e.target.value) } />
      <label htmlFor="endingDate">The end of the tournament :</label>
      <input type="date" name="endingDate" id="endingDate" value={endDate} onChange = {e => setEndDate(e.target.value)} />
      <button type="submit" className="btn">
        Create!
      </button>
    </form>
  );
}

import React, { useState, useEffect } from "react"
import TeamMember from "./TeamMember"


//function for randomizing array
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}



const TeamGrid = ({team}) => {

  //pass array through shuffleArray function
  const shuffledTeam = shuffleArray(team);

  //define how many elements to show from array
  // const itemsToShow = 4;
  // const totalItems = team.length;

  return (
    <>
      <div className="row">
        {shuffledTeam && shuffledTeam.slice(0, 4).map(team => (
          <>
            <TeamMember team={team} />
          </>
        ))}
      </div>
      <div className="row">
        {shuffledTeam && shuffledTeam.slice(4, 8).map(team => (
          <>
            <TeamMember team={team} />
          </>
        ))}
      </div>
    </>
  )
}

export default TeamGrid
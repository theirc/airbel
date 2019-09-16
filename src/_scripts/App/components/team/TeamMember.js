import React, { useState } from "react"


const TeamMember = (team) => {
  const [showMemberDetails, setShowMemberDetails] = useState(false);
  const BackgroundImage = {
    backgroundImage: `url(` + team.team.image + `)`,
  }
  return (
    <>
      <li className="team-item">
        <div className="bg-image aspect-1x1" style={BackgroundImage} onClick={() => setShowMemberDetails(!showMemberDetails)}></div>
        
      </li>
      {showMemberDetails && <div className="team-member-details">
        <h3>{team.team.name}</h3>
        <p><em>{team.team.role_title}</em></p>
        <hr />
        <p><strong>Focus:</strong><br />
          {team.team.focuses}
        </p>
        <p><strong>Practice:</strong><br />
          {team.team.practice}
        </p>
        <hr />
        <p>{team.team.bio}</p>
        {team.team.leadership}
      </div>}
    </>
  )
}

export default TeamMember
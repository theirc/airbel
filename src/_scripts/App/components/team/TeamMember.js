import React from "react"

const TeamMember = (team) => {
  const BackgroundImage = {
    backgroundImage: `url(` + team.team.image + `)`,
  }
  return (
    <>
      <div className="col-lg-3">
        <div className="bg-image aspect-1x1" style={BackgroundImage}></div>
        <h3>{team.team.name}</h3>
        <p><em>{team.team.role_title}</em></p>
        <hr/>
        <p><strong>Focus:</strong><br/>
          {team.team.focuses}
        </p>
        <p><strong>Practice:</strong><br/>
          {team.team.practice}
        </p>
        <hr/>
        <p>{team.team.bio}</p>
        {team.team.leadership}
      </div>
    </>
  )
}

export default TeamMember
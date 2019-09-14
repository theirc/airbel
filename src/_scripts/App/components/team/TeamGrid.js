import React from "react"
import TeamMember from "./TeamMember"

const TeamGrid = ({team}) => {
  return (
    <>
      <div className="row">
        {team && team.map(team => (
          <>
            <TeamMember team={team} />
          </>
        ))}
      </div>
    </>
  )
}

export default TeamGrid
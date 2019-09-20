import React, { useState, useEffect } from "react"
import TeamMember from "./TeamMember"

const TeamGrid = ({filteredTeam}) => {
  function getRandomTeam() {
    const randomTeam = filteredTeam.sort(function (a, b) { return 0.5 - Math.random() })
    const shortList = randomTeam.slice(0, 8)
    return shortList;
  }
  const [randomTeam, setRandomTeam] = React.useState(getRandomTeam())
  const [showMemberDetails, setShowMemberDetails] = useState(false)
  const [selectedTeamMember, setSelectedTeamMember] = useState({})

  return (
    <>
      <button onClick={() => setRandomTeam(getRandomTeam())}>Get Random</button>
      <div className={showMemberDetails ? 'team-wrapper show-details' : 'team-wrapper'}>
        <ul className="team-list">
          {randomTeam && randomTeam.map((teamMember, index) => {
            const BackgroundImage = {
              backgroundImage: `url(` + teamMember.image + `)`,
            }
            return (
              <li className={selectedTeamMember === teamMember ? 'team-item active' : 'team-item'} key={index} onClick={() => {
                setSelectedTeamMember(teamMember)
                setShowMemberDetails(true)
              }}>
                <div className="bg-image aspect-1x1" style={BackgroundImage}></div>
              </li>
            )
          }
          )}
        </ul>
        
        <div className={showMemberDetails && selectedTeamMember ? 'team-member-details active' : 'team-member-details'}>
          <button className="close-details" onClick={() => {
            setShowMemberDetails(false)
            setSelectedTeamMember({})
          }}>x</button>
          {showMemberDetails && selectedTeamMember && (
            <>
            <h3>{selectedTeamMember.name}</h3>
            {selectedTeamMember.role_title ? (
              <p><em>{selectedTeamMember.role_title}</em></p>
            ) : ("")}
            <hr />
            {selectedTeamMember.focus ? (
              <p><strong>Focus:</strong><br />
                {selectedTeamMember.focus}
              </p>
            ) : ("")}
            <p><strong>Practice:</strong><br />
              {selectedTeamMember.expertise_areas.map((expertise, index) => {
                return (
                  <span key={index}>{expertise.title}</span>
                )
              })}
            </p>
            <hr />
            <p>{selectedTeamMember.bio}</p>
            <p>Leadership: {selectedTeamMember.leadership}</p>
            </>
          )}
          
        </div>
      </div>
    </>
  )
}

export default TeamGrid
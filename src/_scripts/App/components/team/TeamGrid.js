import React, { useState, useEffect } from "react"
import TeamMember from "./TeamMember"

const TeamGrid = ({filteredTeam}) => {

  function getRandomTeam() {
    const randomTeam = filteredTeam.sort(function (a, b) { return 0.5 - Math.random() })
    const shortList = randomTeam.slice(0, 8)
    return shortList;
  }
  const [randomTeam, setRandomTeam] = useState(getRandomTeam())
  const [showMemberDetails, setShowMemberDetails] = useState(false)
  const [selectedTeamMember, setSelectedTeamMember] = useState({})

  return (
    <>
      <button onClick={() => {
          setShowMemberDetails(false)
          setSelectedTeamMember({})
          setRandomTeam(getRandomTeam())
        }
        
        } className="refresh-team" title="more team"><img src="/img/icons/refresh.png" className="img-fluid" alt="refresh icon"/></button>
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
            <div className="team-member-info">
              <div className="d-flex align-items-center">
                <div className="details-image d-block d-md-none w-25 mb-3">
                  <img src={selectedTeamMember.image} className="img-fluid " alt="{selectedTeamMember.name}" />
                </div>  
                <div className="p-3 p-md-0">
                  <h3>{selectedTeamMember.name}</h3>
                  {selectedTeamMember.role_title ? (
                    <p className="mb-0 mb-md-3"><em>{selectedTeamMember.role_title}</em></p>
                  ) : ("")}
                </div>
              </div>
              <hr />
               
              {selectedTeamMember && selectedTeamMember.focus && (
                <p><strong>Focus:</strong><br />
                  {selectedTeamMember.focus}
                </p>
              )}

              {selectedTeamMember.expertise_areas.length !== 0 && 
                (
                  <p><strong>Practice:</strong><br />
                    {selectedTeamMember.expertise_areas.map((expertise, index) => {
                      return (
                        <span key={index}>{expertise.title}</span>
                      )
                    })}
                  </p>
                )
              }
              {selectedTeamMember && (selectedTeamMember.focus || selectedTeamMember.expertise_areas.length !== 0) && <hr />}
              <div dangerouslySetInnerHTML={{ __html: selectedTeamMember.bio }}>

              </div>
              
              {/* <p>{selectedTeamMember.bio}</p> */}
              {/* <p>Leadership: {selectedTeamMember.leadership}</p> */}
            </div>
          )}
          
        </div>
      </div>
    </>
  )
}

export default TeamGrid
import React, { useContext } from 'react'
import { TeamContext } from './TeamContext'

function Details() {
  const [state, setState] = useContext(TeamContext)
  const { selectedTeamMember } = state

  return (
    <>
      {selectedTeamMember && (
        <div className={selectedTeamMember ? 'team-member-details active' : 'team-member-details'}>
          <button
            className="close-details"
            onClick={() => { setState(state => ({ ...state, selectedTeamMember: null })) }}
          >x</button>

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

            {selectedTeamMember.focus && (
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

            <div dangerouslySetInnerHTML={{ __html: selectedTeamMember.bio }}></div>

          </div>
        </div>
      )}
    </>
  )
}

export default Details

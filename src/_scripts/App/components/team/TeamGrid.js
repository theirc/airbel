import React, { useContext } from "react"
import { TeamContext } from './TeamContext'
import Thumbnail from './Thumbnail'
import Details from './Details'

const TeamGrid = () => {
  const [state, setState] = useContext(TeamContext)
  const { visibleTeam, selectedTeamMember } = state

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="content">
            {visibleTeam && (
              <div className={selectedTeamMember ? 'team-wrapper show-details' : 'team-wrapper'}>
                <ul className="team-list">
                  {visibleTeam.map((teamMember, index) => <Thumbnail key={index} teamMember={teamMember} />)}
                </ul>

                <Details />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamGrid
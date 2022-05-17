import React, { useContext } from 'react'
import { TeamContext } from './TeamContext'

function Thumbnail({ teamMember }) {
  const [state, setState] = useContext(TeamContext)
  const { selectedTeamMember } = state

  const BackgroundImage = {
    backgroundImage: `url(` + teamMember.image + `)`,
  }

  return (
    <li
      className={selectedTeamMember === teamMember ? 'team-item active' : 'team-item'}
      onClick={() => { setState(state => ({ ...state, selectedTeamMember: teamMember })) }}
    >
      <div className="bg-image aspect-1x1" style={BackgroundImage}></div>
    </li>
  )
}

export default Thumbnail

import React, { useContext } from "react"
import { SelectInput } from '../../common/fields/SelectInput'
import { groupedTeamOptions } from '../../common/SelectOptions'
import { TeamContext } from './TeamContext'

const TeamFilters = () => {
  const [state, setState] = useContext(TeamContext)
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="content">
            <h2>
              <span className="mr-4">Our team</span>
              <button
                onClick={() => {
                  setState(state => ({ ...state, selectedTeamMember: null, chooseRandomTeam: true }))
                }}
                className="refresh-team"
                title="more team"
              >
                <img src="/img/icons/refresh.png" className="img-fluid" alt="refresh icon" />
              </button>
            </h2>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="content">
            <SelectInput
              name="teamFilter"
              options={groupedTeamOptions}
              onChange={(option) => setState(state => ({ ...state, filterString: option }))}
              placeholder="All..."
              isMulti={false}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamFilters
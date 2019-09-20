import React, { useState, useEffect } from "react"
import { TEAM_DATA } from './data';
import { TEAM_FILTERED } from './data';
import TeamGrid from "./TeamGrid"
import TeamFilters from "./TeamFilters"

const Team = () => {
  const [team, setTeam] = useState(TEAM_DATA)
  const [filteredTeam, setFilteredTeam] = useState(TEAM_DATA)

  const filterString = 'design'

  function filterData() {
    const updatedTeam = team.filter(teamMember => {
      const matched = teamMember.expertise_areas.find(area => area.slug == filterString)
      return matched ? true : false
    })

    setFilteredTeam(updatedTeam)
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Our Team of experts</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="content">
                <TeamFilters filterData={filterData} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="content">
                <TeamGrid filteredTeam={filteredTeam} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
import React, { useState, useEffect } from "react"
import { TEAM_DATA } from './data';
import { TEAM_FILTERED } from './data';
import TeamGrid from "./TeamGrid"
//import TeamFilters from "./TeamFilters"
import axios from 'axios'

const Team = () => {
  const [team, setTeam] = useState([])
  const [filteredTeam, setFilteredTeam] = useState([])

  useEffect(async () => {
    const result = await axios('/data/team.json')
    setTeam(result.data)
    const teamWithHeadshots = result.data.filter(teamMember => {
      // console.log(teamMember.image)
      return teamMember.image !== '' ? true : false
    })
    setFilteredTeam(teamWithHeadshots)
  }, [])

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
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Our team</h2>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="content">
                <TeamFilters filterData={filterData} />
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12">
              <div className="content">
                {filteredTeam && filteredTeam.length &&
                  (
                    <TeamGrid filteredTeam={filteredTeam} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
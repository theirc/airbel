import React from "react"
import { TEAM_DATA } from './data';
import TeamGrid from "./TeamGrid"
import TeamMember from "./TeamMember"

const Team = () => {
  const team = TEAM_DATA;
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Team of experts</h2>
              <TeamGrid team={team} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
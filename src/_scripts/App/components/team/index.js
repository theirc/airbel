import React from "react"
import { TEAM_DATA } from './data';
import TeamGrid from "./TeamGrid"
import TeamMember from "./TeamMember"
// import Slider from "../slider/Slider"

const Team = () => {
  const team = TEAM_DATA;
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
                <TeamGrid team={team} />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <Slider />
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Team
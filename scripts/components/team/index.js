import React from "react"
import { TeamProvider } from './TeamContext'
import TeamGrid from "./TeamGrid"
import TeamFilters from "./TeamFilters"

const Team = () => {

  return (
    <TeamProvider>
      <section id="team">
        <div className="container">
          <TeamFilters />

          <TeamGrid />
        </div>
      </section>
    </TeamProvider>
  )
}

export default Team
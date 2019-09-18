import React from "react"
import StudiesListItem from "./StudiesListItem"

const StudiesList = ({ studies }) => {
  return (
    <>
      <div className="row">
        {studies && studies.map(study => (
          <>
            <StudiesListItem study={study} />
          </>
        ))}
      </div>
    </>
  )
}

export default StudiesList
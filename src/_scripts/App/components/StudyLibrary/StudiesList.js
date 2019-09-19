import React from "react"
import StudiesListItem from "./StudiesListItem"

const StudiesList = ({ studies }) => {
  return (
    <>
      <div className="row">
        {/* {errors && <div className="alert alert-danger">There was an error fetching studies data.</div>} */}
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
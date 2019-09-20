import React, { useContext } from "react"
import { StudyLibraryContext } from './StudyLibraryContext'
import StudiesListItem from "./StudiesListItem"

const StudiesList = () => {
  const [state, setState] = useContext(StudyLibraryContext)
  const { filteredStudies } = state

  return (
    <>
      <div className="row">
        {/* {errors && <div className="alert alert-danger">There was an error fetching studies data.</div>} */}
        {filteredStudies && filteredStudies.map(study => (
          <>
            <StudiesListItem study={study} />
          </>
        ))}
      </div>
    </>
  )
}

export default StudiesList
import React, { useContext } from "react"
import { StudyLibraryContext } from './StudyLibraryContext'
import StudiesListItem from "./StudiesListItem"

const StudiesList = () => {
  const [state, setState] = useContext(StudyLibraryContext)
  const { filteredStudies, studies } = state

  return (
    <>
      <div className="row">
        {/* {errors && <div className="alert alert-danger">There was an error fetching studies data.</div>} */}
        {filteredStudies.length === 0 && <p className="alert alert-info">There are no studies that meet those criteria. Click here to reset your filter preferences.</p>}

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
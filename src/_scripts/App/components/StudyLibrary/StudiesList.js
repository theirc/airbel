import React, { useContext } from "react"
import { StudyLibraryContext } from './StudyLibraryContext'
import StudiesListItem from "./StudiesListItem"

const StudiesList = () => {
  const [state, setState] = useContext(StudyLibraryContext)
  const { filteredStudies, studies } = state

  return (
    <>
      {filteredStudies.length === 0 && (
        <div className="row">
          <div className="col-12">
            <p className="lead text-center">There are no studies that meet those criteria. <a onClick={() => console.log("RESET")}>Click here</a> to reset your filter preferences.</p>
          </div>
        </div>
      )}

      {filteredStudies && (
        <>
          <div className="row">
            <div className="col-12 text-right">
              <small className="text-muted">Showing <span>{state.filteredStudies.length}</span> studies</small>
            </div>
          </div>
          <div className="row">
            {/* {errors && <div className="alert alert-danger">There was an error fetching studies data.</div>} */}
            <div className="col-12">
              {filteredStudies.map(study => (
                <>
                  <StudiesListItem study={study} />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default StudiesList
import React from "react"
import StudiesFilters from './StudiesFilters'
import StudiesList from './StudiesList'
import { STUDY_DATA } from './data';

const StudyLibrary = () => {
  const studies = STUDY_DATA;
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Studies Library</h2>
            </div>
          </div>
          <StudiesFilters />
          <div className="row">
            <div className="col-12">
              <StudiesList studies={studies} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudyLibrary
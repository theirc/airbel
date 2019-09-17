import React from "react"
import StudyFilters from './StudyFilters'
import StudyList from './StudyList'
import {STUDY_DATA} from './data';

const Study = () => {
  const studies = STUDY_DATA;
  return( 
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Publication Library</h2>
              </div>
            </div>
          </div>
          <StudyFilters />
          <div className="row">
            <div className="col-12">
              <div className="content">
                <StudyList studies={studies} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Study
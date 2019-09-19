import React, { useState, useEffect } from "react"
import StudiesFilters from './StudiesFilters'
import StudiesList from './StudiesList'
import { STUDY_DATA } from './data';
import axios from 'axios'

const StudyLibrary = () => {
  // const studies = STUDY_DATA;
  const [studies, setStudies] = useState([])

  useEffect(async () => {
    const result = await axios('/data/studies.json')
    console.log(result.data)
    setStudies(result.data)
  }, [])

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Studies Library
                <i class="ri-filter-fill"></i>
              </h2>
            </div>
          </div>
          <StudiesFilters />
          <div className="row">
            <div className="col-12">
              {studies && <StudiesList studies={studies} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudyLibrary
import React, { useState, useEffect } from "react"
import { StudyLibraryProvider } from './StudyLibraryContext'
import StudiesFilters from './StudiesFilters'
import StudiesList from './StudiesList'

const StudyLibrary = () => {


  return (
    <StudyLibraryProvider>
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <h2>Studies Library</h2>
              <span className="text-muted" onClick={() => console.log("Toggle Filters")}><i class="ri-filter-fill text-dark d-inline-block"></i></span>
            </div>
          </div>
          <StudiesFilters />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <StudiesList />
            </div>
          </div>
        </div>
      </section>
    </StudyLibraryProvider>
  )
}

export default StudyLibrary
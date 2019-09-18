import React from "react"

const StudiesListItem = ({ study }) => {
  const { title, focus, startDate, endDate, regions, url } = study
  const dateRange = `${startDate} - ${endDate}`
  return (
    <>
      <div className="row bg-light border-green">
        <div className="col-12">
          <div className="p-3 py-lg-2 px-lg-5">
            <p className="mb-0"><em>{focus}</em></p>
            <h3>{title}</h3>
            <p><em>{dateRange} | {regions}</em></p>
          </div>
        </div>
        <a href={url} target="_blank" className="btn btn-dark">Find out more</a>
      </div>
    </>
  )
}

export default StudiesListItem


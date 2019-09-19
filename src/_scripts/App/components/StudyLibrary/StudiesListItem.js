import React from "react"

const StudiesListItem = ({ study }) => {
  const { title, focus, startDate, endDate, regions, url, evergreen } = study
  return (
    <>
      <a href={url} className={`row study-row no-gutters bg-light border-${focus.toLowerCase()}`}>
        <div class="col-12">
          <div class="px-5 py-3">
            <p className="mb-0">
              <em>{focus}</em>
            </p>

            <h4 className="mb-2">{title} {evergreen && <span className="text-yellow">(Ongoing)</span>}</h4>
            <p className="mb-2">
              <small>
                {startDate && endDate && <em>{startDate} - {endDate}</em>}
                {regions && regions.map(region => {
                  <em>{region}</em>
                })}
              </small>
            </p>
          </div>
        </div>
      </a>
    </>
  )
}

export default StudiesListItem


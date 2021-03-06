import React, { useContext } from "react"
import { StudyLibraryContext } from './StudyLibraryContext'

const StudiesListItem = ({ study }) => {
  // const [state, setState] = useContext(StudyLibraryContext)
  const { title, focus, slug, startDate, endDate, regions, url, evergreen } = study
  // const visible = state.filters.showOnlyEvergreen && !evergreen ? 'd-none' : ''
  const str = `row study-row no-gutters bg-light w-100 border-${slug}`

  return (
    <>
      <a href={url} className={str}>
        <div class="col-12">
          <div class="px-5 py-3">
            <p className="mb-0">
              <em>{focus}</em>
            </p>

            <h4 className="mb-2">{title} {evergreen && <span className="text-yellow">(Ongoing)</span>}</h4>
            <p className="mb-2">
              <small>

                {startDate && <em>{startDate}</em>}
                {startDate && endDate && ` - `}
                {endDate && <em>{endDate}</em>}
                &nbsp;|&nbsp;
                {regions && (
                  regions.join(", ")
                )}
              </small>
            </p>
          </div>
        </div>
      </a>
    </>
  )
}

export default StudiesListItem


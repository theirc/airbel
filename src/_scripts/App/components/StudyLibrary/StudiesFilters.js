import React, { useContext } from "react"
import { SelectInput } from '../../common/fields/SelectInput'
import { SwitchInput } from '../../common/fields/SwitchInput'
import { groupedOptions, focusOptions, typeOptions } from '../../common/SelectOptions'

import { StudyLibraryContext } from './StudyLibraryContext'
import useFilter from '../../common/hooks/useFilter'


const StudiesFilters = () => {
  const [state, setState] = useContext(StudyLibraryContext)
  const { applyFilters, isFiltered } = useFilter(StudyLibraryContext)

  return (
    <>
      <form>
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <h2>Studies Library</h2>
            <div>
              <SwitchInput
                type="checkbox"
                name="evergreen"
                checked={state.filters.showOnlyEvergreen}
                onChange={() => setState(state => ({ ...state, filters: { ...state.filters, showOnlyEvergreen: !state.filters.showOnlyEvergreen } }))}
                label="Ongoing"
              />
              {/* <span className="text-muted" onClick={() => console.log("Toggle Filters")}><i class="ri-filter-fill text-dark d-inline-block"></i></span> */}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-12">
            <div className="input-group mb-2">
              <input
                className="form-control"
                placeholder="Search study titles..."
                type="text"
                onKeyUp={input => setState(state => ({ ...state, filterString: input.value }))}
              />
              <div className="input-group-append">
                <div className="input-group-text"><i class="ri-search-line"></i></div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <SelectInput
              name="publicationTypes"
              options={typeOptions}
              onChange={(option) => setState(state => ({ ...state, filters: { ...state.filters, publicationTypes: option } }))}
              label="Filter by type"
              placeholder="All..."
              isMulti={true}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <SelectInput
              name="focus"
              options={focusOptions}
              onChange={(option) => setState(state => ({ ...state, filters: { ...state.filters, focus: option.value } }))}
              label="Filter by focus"
              placeholder="All..."
              isMulti={false}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <SelectInput
              name="regions"
              options={groupedOptions}
              onChange={(option) => setState(state => ({ ...state, filters: { ...state.filters, regions: option } }))}
              label="Filter by region"
              placeholder="All..."
              isMulti={true}
              isSearchable={true}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default StudiesFilters

import React, { useContext } from "react"
import { Formik, Field, Form } from 'formik';
import { TextInput, SwitchInput, SelectInput } from '../../common/FormFields'
import { groupedOptions, focusOptions, typeOptions } from '../../common/SelectOptions'

import { StudyLibraryContext } from './StudyLibraryContext'
import useFilter from '../../common/hooks/useFilter'

import { Debug } from '../../common/utils/debug';

const StudiesFilters = () => {
  const { applyFilters, isFiltered } = useFilter(StudyLibraryContext)

  return (
    <>
      {/* <form>
        <div className="row">
          <div className="col-12 col-sm-10">
            <TextInput
              type="text"
              name="searchTerm"
              placeholder="Search..."
            />
          </div>
          <div className="col-12 col-sm-2">
            <SwitchInput
              type="checkbox"
              name="evergreen"
              checked={values.evergreen}
              onChange={() => setFieldValue('evergreen', !values.evergreen)}
              label="Ongoing"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <SelectInput
              name="publicationTypes"
              options={typeOptions}
              label="Filter by type"
              placeholder="Select publication types..."
              isMulti={true}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <SelectInput
              name="focus"
              options={focusOptions}
              label="Filter by focus"
              placeholder="Select a focus..."
              isMulti={false}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <SelectInput
              name="regions"
              options={groupedOptions}
              label="Filter by region"
              placeholder="Select regions..."
              isMulti={true}
              isSearchable={true}
            />
          </div>
        </div>
      </form>
      <hr /> */}
      <Formik>
        {/* Using child as a function instead of the render prop shown in the examples */}
        {({ values, setFieldValue, }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              applyFilters(values)
            }}
          >
            <div className="row">
              <div className="col-12 d-none">
                <Field
                  type="text"
                  name="searchTerm"
                  component={TextInput}
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  name="publicationTypes"
                  options={typeOptions}
                  component={SelectInput}
                  label="Filter by type"
                  placeholder="Select publication types..."
                  isMulti={true}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  name="focus"
                  options={focusOptions}
                  component={SelectInput}
                  label="Filter by focus"
                  placeholder="Select a focus..."
                  isMulti={false}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  name="regions"
                  options={groupedOptions}
                  component={SelectInput}
                  label="Filter by region"
                  placeholder="Select regions..."
                  isMulti={true}
                  isSearchable={true}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button className="btn btn-primary" type="submit">Apply Filters</button>
              </div>
              <div className="col-6 text-right">
                <Field
                  type="checkbox"
                  name="evergreen"
                  component={SwitchInput}
                  checked={values.evergreen}
                  onChange={() => setFieldValue('evergreen', !values.evergreen)}
                  label="Ongoing"
                />
              </div>
            </div>
            {/* <Debug /> */}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StudiesFilters

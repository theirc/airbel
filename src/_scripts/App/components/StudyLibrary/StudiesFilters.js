import React from "react"
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { TextInput, SwitchInput, SelectInput } from '../../common/FormFields';
import { Debug } from '../../common/utils/debug';

import { groupedOptions, focusOptions, typeOptions } from '../../common/SelectOptions'

const StudiesFilters = ({ handleFilterChange }) => {

  return (
    <>
      <Formik>
        {/* Using child as a function instead of the render prop shown in the examples */}
        {({ values, error, touched, isSubmitting, handleBlur, setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-sm-10">
                <Field
                  type="text"
                  name="searchTerm"
                  component={TextInput}
                  placeholder="Search..."
                />
              </div>
              <div className="col-12 col-sm-2">
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

            <Debug />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StudiesFilters
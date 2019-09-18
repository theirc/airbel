import React from "react"
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { TextInput, SwitchInput, SelectInput } from '../../common/FormFields';
import { Debug } from '../../common/utils/debug';

import { groupedOptions, focusOptions, typeOptions } from '../../common/SelectOptions'

const StudiesFilters = () => {
  return (
    <>
      <Formik>
        {/* Using child as a function instead of the render prop shown in the examples */}
        {({ values, error, touched, isSubmitting, handleBlur, setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  type="text"
                  name="publicationTypes"
                  component={SelectInput}
                  options={typeOptions}
                  value={values.publicationTypes}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  isMulti
                  label="Filter by type"
                  placeholder="Choose publication types..."
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  type="text"
                  name="focus"
                  component={SelectInput}
                  options={focusOptions}
                  label="Filter by focus"
                  placeholder="Choose a focus..."
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  type="text"
                  name="regions"
                  component={SelectInput}
                  options={groupedOptions}
                  isMulti
                  label="Filter by region"
                  placeholder="Choose regions..."
                />
              </div>
            </div>
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
            <Debug />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StudiesFilters
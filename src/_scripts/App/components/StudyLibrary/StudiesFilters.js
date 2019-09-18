import React from "react"
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { TextInput, SwitchInput, SelectInput } from '../../common/FormFields';
import { Debug } from '../../common/utils/debug';

import { groupedOptions } from '../../common/SelectOptions'

const StudiesFilters = () => {
  return (
    <>
      <Formik>
        {/* Using child as a function instead of the render prop shown in the examples */}
        {({ values, error, touched, isSubmitting, handleBlur, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12">
                <Field
                  type="text"
                  name="regions"
                  component={SelectInput}
                  options={groupedOptions}
                  isMulti
                  label="Filter by region"
                  placeholder="Choose a region..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Field
                  type="text"
                  name="searchTerm"
                  component={TextInput}
                  placeholder="Search..."
                />
                <Field
                  type="checkbox"
                  name="evergreen"
                  component={SwitchInput}
                  checked={values.featured}
                  onChange={() => setFieldValue('evergreen', !values.featured)}
                  label="Feature this supplier?"
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
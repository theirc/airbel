import React from "react"
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { SelectInput } from '../../common/FormFields';
import { Debug } from '../../common/utils/debug';

import { groupedTeamOptions } from '../../common/SelectOptions'

const TeamFilters = ({filterData}) => {

  return (
    <>
      <h1>Team Filters</h1>
      <button onClick={() => filterData()}>Filter Data</button>
      <Formik>
        {/* Using child as a function instead of the render prop shown in the examples */}
        {({ values, error, touched, isSubmitting, handleBlur, setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="row">
             
              
              <div className="col-12 col-sm-6 col-md-4">
                <Field
                  name="team-options"
                  options={groupedTeamOptions}
                  component={SelectInput}
                  label="Filter by"
                  placeholder="Select options"
                  isMulti={false}
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

export default TeamFilters
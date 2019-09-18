import React from 'react'
import { ErrorMessage } from 'formik'
import Select from 'react-select';
import { Checkbox } from 'semantic-ui-react'

export const TextInput = ({
  field, label, hint, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input className="form-control" {...field} {...props} />
      {hint && <small className="form-text text-muted">{hint}</small>}
      <ErrorMessage name="title">
        {msg => <div className="error">{msg}</div>}
      </ErrorMessage>
    </div>
  );


export const TextArea = ({
  field, label, hint,
  form: { touched, errors },
  ...props
}) => (
    <div className="form-group">
      {label && <label>{label}</label>}
      <textarea className="form-control" {...field} {...props}></textarea>
      {hint && <small className="form-text text-muted">{hint}</small>}
      <ErrorMessage name="title">
        {msg => <div className="error">{msg}</div>}
      </ErrorMessage>
    </div>
  );

// Switches
export const SwitchInput = ({
  field, label, hint, onChange,
  form: { touched, errors },
  ...props
}) => (
    <div className="form-group">
      <Checkbox
        {...field}
        toggle
        onChange={onChange}
        label={label}
        {...props}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );

// Selects

export const SelectInput = ({
  // input, placeholder,
  defaultValue, isMulti, isSearchable, options,
  field, label, hint, onChange,// { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  const groupBadgeStyles = {
    backgroundColor: '#FEC938',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  }

  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  )

  // handleChange = value => {
  //   // this is going to call setFieldValue and manually update values.topcis
  //   this.props.onChange('topics', value);
  // };

  // handleBlur = () => {
  //   // this is going to call setFieldTouched and manually update touched.topcis
  //   this.props.onBlur('topics', true);
  // };

  return (
    <div className="form-group">
      <label className={label ? '' : 'sr-only'}>{label}</label>
      <Select
        {...field}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        // value={getValue()}
        // onChange={onChange}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#EBECF0',
            primary: '#172B4D',
          },
        })}
        {...props}
      />
    </div>
  )
}
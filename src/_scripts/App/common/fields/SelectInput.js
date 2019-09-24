import React from 'react'
import Select from 'react-select';

export const SelectInput = ({
  name,
  className,
  placeholder,
  options,
  defaultValue,
  onChange,
  isMulti,
  isSearchable,
  label, hint,
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
  // const onChange = option => {
  //   form.setFieldValue(
  //     field.name,
  //     isMulti
  //       ? option
  //       : option.value
  //   )
  // }



  return (
    <div className="form-group">
      <label className={label ? '' : 'sr-only'}>{label}</label>
      <Select
        className={className}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        placeholder={placeholder}
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
      />
      {/* <Select
        {...field}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        // value={getValue()}
        // onChange={onChange}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable

        {...props}
      /> */}
    </div>
  )
}
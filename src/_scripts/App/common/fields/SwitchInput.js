import React from 'react'
import { Checkbox } from 'semantic-ui-react'

// Switches
export const SwitchInput = ({
  input, label, hint, onChange,
  ...props
}) => (
    <div className="form-group">
      <Checkbox
        {...input}
        toggle
        onChange={onChange}
        label={label}
        {...props}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
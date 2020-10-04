import React from 'react';
import PropTypes from 'prop-types';
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-field-api'

const DatePicker = (props) => {
  const { label, input, isDisabled, isReadOnly, meta, ...rest } = useFieldApi(props);

  return (
    <div style={{ textAlign: 'left', paddingBottom: '10px' }}>
      <label htmlFor="date">{label}</label>
      <input id="date" {...input} disabled={isDisabled} readOnly={isReadOnly} className="form-control" />
      {meta.touched && meta.error && <p style={{ color: 'red', marginBottom: 0 }}>{meta.error}</p>}
    </div>
  )
};

DatePicker.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool
};

export default DatePicker;

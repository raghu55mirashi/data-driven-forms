import React from 'react';
import PropTypes from 'prop-types';
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-field-api'

const Select = (props) => {
  const { label, input, isDisabled, meta, options } = useFieldApi(props);

  return (
    <div style={{ textAlign: 'left', paddingBottom: '10px' }}>
      <div style={{ display: "block" }}>{label}</div>
      <select {...input} disabled={isDisabled} className="form-control">
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {meta.touched && meta.error && <p style={{ color: 'red', marginBottom: 0 }}>{meta.error}</p>}
    </div>
  );
};

Select.propTypes = {
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.node
    })
  )
};

export default Select;

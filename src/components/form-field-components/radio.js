import React from 'react';
import PropTypes from 'prop-types';
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-field-api'

const SingleRadio = (props) => {
  const { label, input, isDisabled } = useFieldApi({ ...props });

  const id = `${input.name}-${input.value}`;
  return (
    <div key={id}>
      <input {...input} id={id} disabled={isDisabled} />
      <label htmlFor={id} style={{ paddingLeft: '5px' }}>{label}</label>
    </div>
  );
};

const Radio = ({ label, options, ...props }) => {
  const { meta } = useFieldApi({ ...props });
  return (
    <div style={{ textAlign: 'left', paddingBottom: '10px' }}>
      <label htmlFor="gender" style={{ display: "block" }}>{label}</label>
      {options.map((option) => (
        <SingleRadio id="gender" key={option.value} {...props} label={option.label} value={option.value} />
      ))}
      {meta.touched && meta.error && <p style={{ color: 'red', marginBottom: 0 }}>{meta.error}</p>}
    </div>
  )
};

Radio.propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
};

export default Radio;

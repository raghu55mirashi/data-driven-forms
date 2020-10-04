import React from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-field-api'

const Switch = (props) => {
  const { input } = useFieldApi({ ...props, type: 'checkbox' });
  return (
    <div>{props.label}
      <input {...input} />
      <span />
    </div>
  );
};

export default Switch;

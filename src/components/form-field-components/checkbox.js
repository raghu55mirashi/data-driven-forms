import React from 'react';
import PropTypes from 'prop-types';
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-field-api'

const Wrapper = ({ label, children }) => (
  <div>
    <h3>{label}</h3>
    {children}
  </div>
);

Wrapper.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node
};

const SingleCheckbox = (props) => {
  const { input, isDisabled, label, name } = useFieldApi({ ...props, type: 'checkbox' });
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input {...input} id={name} type="checkbox" disabled={isDisabled} />
    </React.Fragment>
  );
};

const SingleCheckboxInCommon = (props) => {
  const { input, label, isDisabled } = useFieldApi(props);
  console.log('sss', input);
  return (
    <span style={{ paddingRight: "10px" }}>
      <label htmlFor={props.id} >{label}</label>
      <input className="checkbox" {...input} id={props.id} type="checkbox" disabled={isDisabled} />
    </span>
  )
}

SingleCheckboxInCommon.propTypes = {
  label: PropTypes.node,
  input: PropTypes.object,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string
};
const MultipleChoiceListCommon = ({ label, options, ...props }) => (
  <div>
    <Wrapper label={label}>
      {options.map((option, id) => (
        <SingleCheckboxInCommon key={id} id={option.label + id} {...props} label={option.label} value={option.value} />
      ))}
    </Wrapper>
  </div>
)

const Checkbox = ({ options, ...props }) =>
  options ? (
    <MultipleChoiceListCommon options={options} {...props} />
  ) : (
      <SingleCheckbox {...props} />
    );

Checkbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node, value: PropTypes.any }))
};

export default Checkbox;


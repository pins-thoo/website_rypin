import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import FieldContainer from 'components/Form/FieldContainer';

const TextInput = (props) => {
  const {
    field: { name, value },
    form: { errors, handleBlur, setFieldValue, touched },
    label,
    placeholder,
    type,
  } = props;

  const errorMessage = getIn(touched, name) && getIn(errors, name);

  const onValueChange = (e) => {
    const { value } = e.target;

    setFieldValue(name, value);
  };

  return (
    <FieldContainer error={errorMessage} label={label} name={name}>
      <input
        className="appearance-none border focus:outline-none focus:shadow-outline leading-tight py-2 px-3 rounded shadow text-gray-600 w-full"
        id={name}
        name={name}
        onChange={onValueChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </FieldContainer>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  form: PropTypes.any.isRequired,
  field: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
};

export default TextInput;

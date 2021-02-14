/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, label, type, color, disabled } = props;
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      disabled={disabled}
      className={`btn btn-${color}`}
      type={type}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'primary']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  label: '',
  onClick: () => null,
  type: 'button',
};

export default Button;

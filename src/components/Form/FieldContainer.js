import React from 'react';
import PropTypes from 'prop-types';

const FieldContainer = ({ name, children, error, label }) => (
  <div className="mb-2">
    <label
      className="block font-bold mb-2 text-gray-600 text-sm"
      htmlFor={name}
    >
      {label}
    </label>
    {children}
    <div className="text-red-400 h-4 mt-1 text-xs">{error}</div>
  </div>
);

FieldContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
};

FieldContainer.defaultProps = {
  error: null,
};

export default FieldContainer;

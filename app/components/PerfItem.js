import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

const PerfItem = ({ onClick, selected, label }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: selected ? '#81D4FA' : 'white',
      color: selected ? 'black' : '#757575',
    }}
  >
    {label}
  </button>
);

PerfItem.propTypes = propTypes;

export default PerfItem;

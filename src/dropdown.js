import React from 'react';

function Dropdown({ options, onSelect, label }) {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={(e) => onSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
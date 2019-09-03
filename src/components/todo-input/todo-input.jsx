import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      value={value}
      onChange={onChange}
    />
  </div>
);

ToDoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

ToDoInput.defaultProps = {
  value: '',
  onChange: () => {},
}

export default ToDoInput;
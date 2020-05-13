import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
  onSupmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSupmit: null
}

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function hangleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!onSubmit) return;

    const formValue = {
      title: value,
    };

    onSubmit(formValue);

    // Reset form
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={hangleValueChange} />
    </form>
  );
}

export default TodoForm;
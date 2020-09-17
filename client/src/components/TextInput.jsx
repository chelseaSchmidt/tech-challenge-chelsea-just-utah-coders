import React from 'react';
import { string } from 'prop-types';
import { convertLabelToId } from '../utilities/helpers.js';

const TextInput = ({ label, text, handleTextInput }) => {
  const id = convertLabelToId(label);
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          type="text"
          id={id}
          name={id}
          value={text}
          onChange={handleTextInput}
        />
      </label>
    </>
  );
};

TextInput.propTypes = {
  label: string.isRequired,
  text: string.isRequired,
};

export default TextInput;

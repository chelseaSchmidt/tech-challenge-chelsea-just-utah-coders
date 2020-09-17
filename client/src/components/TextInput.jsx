import React from 'react';
import { string } from 'prop-types';
import { convertLabelToId } from '../utilities/helpers.js';
import '../styles/TextInput.css';

const TextInput = ({ label, text, handleTextInput }) => {
  const id = convertLabelToId(label);
  return (
    <>
      <label htmlFor={id} className="input-label">
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

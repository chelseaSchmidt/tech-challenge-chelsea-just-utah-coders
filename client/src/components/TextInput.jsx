import React from 'react';
import { string, func } from 'prop-types';
import { convertLabelToId } from '../utilities/helpers';
import '../styles/TextInput.css';

const TextInput = ({
  label,
  text,
  placeholder,
  marker,
  handleTextInput,
}) => {
  const id = convertLabelToId(label);
  return (
    <>
      <label htmlFor={id} className="input-label">
        {`${label} ${marker}`}
        <input
          type="text"
          id={id}
          name={id}
          value={text}
          placeholder={placeholder}
          onChange={handleTextInput}
        />
      </label>
    </>
  );
};

TextInput.propTypes = {
  label: string.isRequired,
  text: string.isRequired,
  placeholder: string.isRequired,
  marker: string.isRequired,
  handleTextInput: func.isRequired,
};

export default TextInput;

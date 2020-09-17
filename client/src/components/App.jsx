import React from 'react';
import TextInput from './TextInput';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthdate: '',
      agree: false,
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput({ target: { id, value }}) {
    const stateCopy = { ...this.state };
    stateCopy[id] = value;
    this.setState(stateCopy);
  }

  render() {
    const { name, email, birthdate, agree } = this.state;
    const fields = ['Name', 'Email', 'Birth Date'];
    const values = [name, email, birthdate];
    return (
      <div id="container">
        <div id="form-title">Contact Us</div>
        <form id="contact-form">
          {fields.map((field, i) => (
            <TextInput
              text={values[i]}
              label={field}
              key={`${field}-input`}
              handleTextInput={this.handleTextInput}
            />
          ))}
          <label htmlFor="agree" className="checkbox-label">
            <input type="checkbox" id="agree" name="agree" checked={agree} />
            I agree to be contacted via email.
          </label>
          <div id="button-area">
            <button type="button">Clear</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

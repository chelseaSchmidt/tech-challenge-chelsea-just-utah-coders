/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import TextInput from './TextInput';
import { checkIfEmailValid, checkIfDateValid } from '../utilities/helpers';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthdate: '',
      agree: false,
      submittable: false,
    };
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleUserAgreement = this.handleUserAgreement.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      const {
        name,
        email,
        birthdate,
        agree,
      } = this.state;
      if (name.length > 0 && email.length > 0 && checkIfEmailValid(email) && agree) {
        if (birthdate.length > 0) {
          if (checkIfDateValid(birthdate)) {
            this.setState({ submittable: true });
          } else {
            this.setState({ submittable: false });
          }
        } else {
          this.setState({ submittable: true });
        }
      } else {
        this.setState({ submittable: false });
      }
    }
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      birthdate: '',
      agree: false,
      submittable: false,
    });
  }

  handleTextInput({ target: { id, value } }) {
    const stateCopy = { ...this.state };
    stateCopy[id] = value;
    this.setState(stateCopy);
  }

  handleUserAgreement({ target: { checked } }) {
    this.setState({ agree: checked });
  }

  render() {
    const {
      name,
      email,
      birthdate,
      agree,
      submittable,
    } = this.state;
    const fields = ['Name', 'Email', 'Birth Date'];
    const values = [name, email, birthdate];
    const placeholders = ['Jane Smith', 'jane@gmail.com', 'YYYY-MM-DD'];
    const requiredMarkers = ['*', '*', ''];

    return (
      <div id="container">
        <div id="form-title">Contact Us</div>
        <form id="contact-form">
          {fields.map((field, i) => (
            <TextInput
              text={values[i]}
              label={field}
              placeholder={placeholders[i]}
              marker={requiredMarkers[i]}
              key={`${field}-input`}
              handleTextInput={this.handleTextInput}
            />
          ))}
          <label htmlFor="agree" className="checkbox-label">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={agree}
              onChange={this.handleUserAgreement}
            />
            I agree to be contacted via email. *
          </label>
          <div id="button-area">
            <button type="button" onClick={this.clearForm}>Clear</button>
            <button type="submit" disabled={!submittable}>Submit</button>
          </div>
          <div id="footnote">* Indicates required field</div>
        </form>
      </div>
    );
  }
}

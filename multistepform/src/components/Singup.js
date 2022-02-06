import React, { Component } from 'react';
import Confirmation from './Confirmation';
import PersonalDetails from './PersonalDetails';
import Success from './Success';
import UserDetails from './UserDetails';

export default class Singup extends Component {
  state = {
    step: 1,
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
  };
  // Go to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  // Go to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      levelOfEducation,
    } = this.state;
    const values = {
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      levelOfEducation,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
    }
  }
}

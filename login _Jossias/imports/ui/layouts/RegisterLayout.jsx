import React from 'react';
import { Link } from 'react-router';
import RegisterForm from '../containers/RegisterForm.jsx';

export default class RegisterLayout extends React.Component {
  

  render() {
    return (
      <div className="RegisterLayout">
        <h1>Enter your personal details to create an account</h1>
        <RegisterForm/>
        <Link to="/login"> I have already an account</Link>
      </div>
    );
  }
}

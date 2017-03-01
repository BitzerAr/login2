import React from 'react';
import { Link } from 'react-router';
import LoginForm from '../containers/LoginForm.jsx';

export default class LoginLayout extends React.Component {
  render() {
    return (
      <div className="LoginPage">
        <h1>Login</h1>
        <LoginForm/>
        <div>
          <Link to="/recover"> Forgot your password? </Link>
        </div>
      </div>


    );
  }
}

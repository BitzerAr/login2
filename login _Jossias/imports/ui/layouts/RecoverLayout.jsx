import React from 'react';
import { Link } from 'react-router';
import RecoverForm from '../containers/RecoverForm.jsx';

export default class RecoverLayout extends React.Component {
  render() {
    return (
      <div className="RecoverLayout">
          <h1>Enter your email to send your password</h1>
          <RecoverForm/>
          
      </div>
    );
  }
}

import React from 'react';

import { Link } from 'react-router';

export default class TopBar extends React.Component {



  render() {
    return (
      <div className="TopBar">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

      </div>
    );
  }
}

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LoginLayout from '../layouts/LoginLayout.jsx';
import RegisterLayout from '../layouts/RegisterLayout.jsx';
import TopBar from '../containers/TopBar.jsx';

import { Meteor } from 'meteor/meteor';

export default class MainLayout extends React.Component {

  handleLogout() {
    Meteor.logout((err) => {alert(err)});
  }

  render() {
    var logOutButton = <button onClick={this.handleLogout}> Logout {Meteor.userId()}</button>

    return (
      <div className="MainLayout">
        <div className="TopBar">
          <TopBar/>
        </div>
        <div className="Login-Register">
          {this.props.children}
        </div>

        <div>
          {Meteor.userId() ? logOutButton :  "" }
        </div>
      </div>
    );
  }
}

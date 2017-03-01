import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LoginLayout from '../layouts/LoginLayout.jsx';
import RegisterLayout from '../layouts/RegisterLayout.jsx';
import TopBar from '../containers/TopBar.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import RecoverLayout from '../layouts/RecoverLayout.jsx';

import TestComponent from '../components/TestComponent.jsx';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="MainApplication">
        <Router history={browserHistory}>
          <Route path='/' component={MainLayout}>
            <Route path="login" component={LoginLayout}/>
            <Route path="register" component={RegisterLayout}/>
            <Route path="recover" component={RecoverLayout}/>
            <Route path="test" component={TestComponent}/>
          </Route>
        </Router>
      </div>
    );
  }
}

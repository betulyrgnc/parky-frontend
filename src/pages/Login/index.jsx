// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';

// Actions
import { isAuthentication } from "../../actions/baseActions";

// Objects
import LoginForm from '../../objects/LoginForm/index';

// Local Modules
import './index.css';

export default class Login extends React.Component {
    render() {
    if (isAuthentication()) {
      return (
        <Redirect to="/homepage/"/>
      )
    } else {
      return(
        <div className="container">
          <div className="row loginPage">
            <div className="col-md-6">
              <LoginForm></LoginForm>
            </div>
            <div className="col-md-6">
              <img className="bg-item" src="/images/login-background.png" alt="bg-logo"/>
              <img className="logo-item" src="/images/logo.png" alt="logo"/>
              <p className="logo-text"><span>Kolay</span>Otopark</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

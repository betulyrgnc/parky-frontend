// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Local Modules
import './index.css';

// Actions
import {
  alertify,
  HTTP_200_OK,
  HTTP_400_BAD_REQUEST,
  setAuthInformations
} from "../../actions/baseActions";
import { authLogin } from "../../actions/coreActions";


export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setErrors = this.setErrors.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  setErrors = (errors) => {
    this.setState({
      errors: errors
    });

    if (errors.non_field_errors) {
      alertify.error(errors.non_field_errors.join("<br>"));
    }
  }

  setRedirect = (e) => {
    this.setState({
      redirect: true
    });
  }

  onReset = (e) => {
    this.setState({
      redirect: false,
      email: "",
      password: "",
      errors: {}
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    var data = {
      email: this.state.email,
      password: this.state.password
    };

    authLogin(data, (response) => {

      if (response) {
        if (response.statusCode === HTTP_200_OK) {
          this.onReset();
          setAuthInformations(response.body.auth_token, response.body.user_id);
          this.setRedirect();
        } else if (response.statusCode === HTTP_400_BAD_REQUEST) {
          this.setErrors(response.body);
          alertify.error("Please correct the errors and try again.");
        } else {
          this.onReset();
          alertify.error("An unexpected error has occurred and try again later.");
        }
      } else {
        this.onReset();
        alertify.error("An unexpected error has occurred and try again later.");
      }
    });
}

render() {
    const { redirect, email, password, errors } = this.state;

    if (redirect) {
      return (
        <Redirect to='/homepage/'/>
      )
  }

    return(
      <form id="id_login_form" onSubmit={this.onSubmit} onReset={this.onReset}>

        <div className="row info">

          <div className="col-xs-12">
            <h5 className="parky-header">PRKY</h5>
            <p className="first-text"><span>OTOPARK</span>bulmanın</p>
            <p className="second-text">Kolay yolu.</p>
            <p className="info-text">PRKY size en uygun ve en yakın otoparkı bularak işinizi kolaylaştırmayı hedefleyen bir uygulamadır.Bu uygulama ile otopark bulma telaşından kurtulacaksınız.</p>
          </div>

          <div className="col-xs-12">
            <div className="email-input">
              <input
                type="text" id="id_email"
                className="email-box" name="email"
                placeholder="Email Adress"
                value={email} onChange={this.onChange}/>
              {errors.email &&
                <div className="input-feedback">
                  {errors.email.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
            </div>
          </div>

          <div className="col-md-12">
            <div className="password-input">
            <input
              type="password" id="id_password"
              className="password" name="password"
              placeholder="Password"
              value={password} onChange={this.onChange}/>
            {errors.password &&
              <div className="input-feedback">
                {errors.password.map((error, index) =>
                  <span key={index}>{error}</span>
                )}
              </div>
            }
            </div>
          </div>

          <div className="col-md-12">
            <div className="remember-me">
              <input type="checkbox" id="id_remember_me" name="RememberMe"/>
              <label htmlFor="RememberMe">Remember Me</label>
            </div>
            <div className="forgot-password">
              <a href="*">Forgot password</a>
            </div>
          </div>

          <div className="col-md-12">
            <button className="login-button" type="login-button"><p>Login</p></button>
            <Link to="/register/">
              <button className="sign-up-button" type="sign-up-button"><p>Sign Up</p></button>
            </Link>
          </div>

          <div className="col-md-12">
            <p className="footer-top">By signing up,you agree to PARKY</p>
            <p className="footer-bottom">Terms and Conditions <span>&</span> Privacy Policy</p>
          </div>

        </div>
      </form>
    );
  }
}

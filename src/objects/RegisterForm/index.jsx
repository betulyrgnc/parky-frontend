// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import CitySelectButton from '../../components/CitySelectButton/index'

//Actions
import {
  alertify,
  HTTP_201_CREATED,
  HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { createUser } from "../../actions/userActions";


// Local Modules
import './index.css';

export default class RegisterForm extends React.Component {
constructor() {
  super();
  this.state = {
    redirect: false,
    city:"",
    email: "",
    first_name: "",
    last_name: "",
    phone_number:"",
    password: "",
    confirm_password: "",

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
  console.log(state);
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
    city:"",
    email: "",
    first_name: "",
    last_name: "",
    phone_number:"",
    password: "",
    errors: {}
  });
}

onSubmit = (e) => {
  e.preventDefault();
  var data = {
    city: this.state.city,
    email: this.state.email,
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    phone_number: this.state.phone_number,
    password: this.state.password,
    confirm_password: this.state.confirm_password
  };
  console.log(data);

  createUser(data, (response) => {
    if (response) {
      if (response.statusCode === HTTP_201_CREATED) {
        this.onReset();
        alertify.success(
          "Your registration was successful.<br> Please verify your email address."
        );
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

  const { redirect, city, email, first_name, last_name, phone_number, password, confirm_password, errors } = this.state;

  if (redirect) {
    return (
      <Redirect to='/'/>
    )
  }

    return(
      <form id="id_register_form" onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="container">
          <div className="row register">
            <div className="col-xs-12">
              <h5>PRKY</h5>
              <h3 className="easy"><span>Kayıt</span> ol</h3>
            </div>
            <div className="col-xs-12">
              <div className="city-select">
                <CitySelectButton value={city} onChangeEvent={this.onChange}></CitySelectButton>
              {errors.city &&
                <div className="input-feedback">
                  {errors.city.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
              <div className="email-input">
              <input
                type="text" id="id_email"
                className="email-box" name="email"
                placeholder="email adress"
                value={email} onChange={this.onChange}/>
              {errors.email &&
                <div className="input-feedback">
                  {errors.email.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
              <div className="name-input">
              <input
                type="text" id="id_first_name"
                className="name-box" name="first_name"
                placeholder="First Name"
                value={first_name} onChange={this.onChange}/>
              {errors.first_name &&
                <div className="input-feedback">
                  {errors.first_name.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
              <div className="name-input">
              <input
                type="text" id="id_last_name"
                className="name-box" name="last_name"
                placeholder="Last Name"
                value={last_name} onChange={this.onChange}/>
              {errors.last_name &&
                <div className="input-feedback">
                  {errors.last_name.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>

              <div className="name-input">
              <input
                type="text" id="id_phone_number"
                className="name-box" name="phone_number"
                placeholder="Phone Number(05** *** ****)"
                value={phone_number} onChange={this.onChange}/>
              {errors.phone_number &&
                <div className="input-feedback">
                  {errors.phone_number.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>

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

              <div className="confirm-password-input">
              <input
                type="password" id="id_confirm_password"
                className="confirm_password" name="confirm_password"
                placeholder="Confirm Password"
                value={confirm_password} onChange={this.onChange}/>
              {errors.confirm_password &&
                <div className="input-feedback">
                  {errors.confirm_password.map((error, index) =>
                    <span key={index}>{error}</span>
                  )}
                </div>
              }
              </div>
            </div>
            <div className="col-xs-12">
              <button className="contunie-button" type="submit"><p>Contunie</p></button>

              <Link to="/">
                <button className="sign-in-button" type="submit"><p>Sign in</p></button>
              </Link>
            </div>
            <div className="col-md-12">
              <p className="footer-top">By signing up,you agree to PARKY</p>
              <p className="footer-bottom">Terms and Conditions<span>& </span>Privacy Policy</p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

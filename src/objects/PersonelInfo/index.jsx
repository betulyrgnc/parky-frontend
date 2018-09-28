import React from 'react';
import { Link } from 'react-router-dom';
// Actions
import {
  alertify,
  HTTP_200_OK,
  HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { updateUser } from "../../actions/userActions";

// Local Modules
import './index.css';

export default class PersonelInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      first_name: props.first_name,
      last_name: props.last_name,
      phone_number: props.phone_number,
      city: props.city,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setData = this.setData.bind(this);
    this.setErrors = this.setErrors.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  }

  setData = (data) => {
    this.setState({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      city: data.city
    });
  }

  setErrors = (errors) => {
    this.setState({
      errors: errors
    });

    if (errors.non_field_errors) {
      alertify.error(errors.non_field_errors.join("<br>"));
    }
  }

  onReset = (e) => {
    this.setState({
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      city: "",
      errors: {}
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    updateUser(this.state, (response) => {
      if (response) {
        if (response.statusCode === HTTP_200_OK) {
          this.onReset();
          alertify.success("Your informations has been successfully updated.");
          this.setData(response.body);
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
    const { email, first_name, last_name, phone_number, city, errors } = this.state;

    return(
      <form id="id_personel_informations_form" onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="personel-info-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h6>Kişisel Bilgiler</h6>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="email-text">E-posta</label>
                  <input type="email" id="id_email"
                    name="email" placeholder="yourname@ornek.com"
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
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="name-text">İsim</label>
                  <input
                    type="text" id="id_first_name"
                    name="first_name" placeholder="First Name"
                    value={first_name} onChange={this.onChange} />
                  {errors.first_name &&
                    <div className="input-feedback">
                      {errors.first_name.map((error, index) =>
                        <span key={index}>{error}</span>
                      )}
                    </div>
                  }
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="surname-text">Soyisim</label>
                  <input
                    type="text" id="id_last_name"
                    name="last_name" placeholder="Last Name"
                    value={last_name} onChange={this.onChange} />
                  {errors.last_name &&
                    <div className="input-feedback">
                      {errors.last_name.map((error, index) =>
                        <span key={index}>{error}</span>
                      )}
                    </div>
                  }
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="phone-text">Telefon</label>
                  <input
                    type="text" id="id_phone_number"
                    name="phone_number" placeholder="Phone Number"
                    value={phone_number} onChange={this.onChange} />
                  {errors.phone_number &&
                    <div className="input-feedback">
                      {errors.phone_number.map((error, index) =>
                        <span key={index}>{error}</span>
                      )}
                    </div>
                  }
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="city-text">Şehir</label>
                  <input
                    type="text" id="id_city"
                    name="city" placeholder="City"
                    value={city} onChange={this.onChange} />
                  {errors.city &&
                    <div className="input-feedback">
                      {errors.city.map((error, index) =>
                        <span key={index}>{error}</span>
                      )}
                    </div>
                  }
                </div>
              </div>
              <div className="col-xs-12">
                  <div className="col-xs-6">
                  <button className="update-button" type="submit"><p>Güncelle</p></button>
                  </div>
                <div className="col-xs-6">
                  <Link to="/createCar/">
                    <button className="create-button" type="submit"><p>Araç Ekle</p></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

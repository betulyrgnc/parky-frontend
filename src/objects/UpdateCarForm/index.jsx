// Packages
import React from 'react';
import { Link } from 'react-router-dom';
// Local Modules
import './index.css';

//Actions
import {
 alertify,
 HTTP_200_OK,
 HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { updateCar,listCar} from "../../actions/carActions";

export default class InfoForm extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     cars: [],
     color: props.color,
     errors: {}
   };

   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
   this.setData = this.setData.bind(this);
   this.setErrors = this.setErrors.bind(this);
   this.onReset = this.onReset.bind(this);
  }
  componentWillMount() {
    listCar((body) => {
      this.setState({
        cars: body
      });
    });
  }

  onChange = (e) => {
   const state = this.state
   state[e.target.name] = e.target.value;
   this.setState(state);
   console.log(state);
  }

  setData = (data) => {
    this.setState({
      plate: data.plate,
      color: data.color
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
     plate:"",
     color:"",
     errors: {}
   });
  }

  onSubmit = (e) => {
    e.preventDefault();
    updateCar(this.state, (response) => {
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

    const { cars, color, errors } = this.state;

    return(
      <form id="id_update_car_form" onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="update-car-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h6>Araç Bilgileri</h6>
              </div>

              <div className="col-xs-12">
                <div className="form-group">
                  <label className="plate-text">Plaka</label>
                  <div className ="select-box-car">
                    <select className="car-select" name="car" onChange={this.onChange}>
                      <option hidden>Car</option>
                      {cars.map(car =>
                        <option key={car.id} value={car.id}>{car.plate}</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="plate-text">Color</label>
                    <div className ="select-box-car">
                      <input
                        type="text" id="id_color"
                        className="color-input" name="color"
                        placeholder="color"
                        value={color} onChange={this.onChange}/>
                    </div>
                </div>
              </div>
              <div className="col-xs-12">
                  <Link to="/createCar/">
                    <button className="create-button" type="submit"><p>Araç Ekle</p></button>
                  </Link>
                  <button className="update-button" type="submit"><p>Güncelle</p></button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

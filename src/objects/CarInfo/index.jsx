// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';

// Local Modules
import './index.css';

//Components
import CreateCarButton from '../../components/CreateCarButton/index';
//Actions
import {
 alertify,
 HTTP_201_CREATED,
 HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { createCar } from "../../actions/carActions";

export default class CarInfo extends React.Component {
  constructor() {
   super();
   this.state = {
     redirect: false,
     plate:"",
     color: "",
     type: "",
   };

   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
   //this.setErrors = this.setErrors.bind(this);
   this.setRedirect = this.setRedirect.bind(this);
   this.onReset = this.onReset.bind(this);
  }

  setRedirect = (e) => {
   this.setState({
     redirect: true
   });
  }

  onChange = (e) => {
   const state = this.state
   state[e.target.name] = e.target.value;
   this.setState(state);
   console.log(state);
  }


  onReset = (e) => {
   this.setState({
     plate:"",
     color: "",
     type: "",
     errors: {}
   });
  }

  onSubmit = (e) => {
   e.preventDefault();
   createCar(this.state);
 }


  render() {

    const { redirect, plate, color, type ,errors } = this.state;

    if (redirect) {
      return (
        <Redirect to='/createCar/'/>
      )
    }

    return(
      <form id="id_car_info_form" onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="car-info-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h6>Araç Bilgileri</h6>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="plate-text">Plaka</label>
                  <input
                    type="plate" id="id_plate"
                    className="plate-input" name="plate"
                    placeholder="61 TR 61"
                    value={this.state.plate} onChange={this.onChange}/>

                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="type-text">color</label>
                  <input
                    type="text" id="id_color"
                    className="plate-input" name="color"
                    placeholder="color"
                    value={this.state.color} onChange={this.onChange}/>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <label className="type-text">tip</label>
                  <input
                    type="plate" id="id_plate"
                    className="plate-input" name="type"
                    placeholder="61 TR 61"
                    value={this.state.type} onChange={this.onChange}/>
                </div>
              </div>
              <div className="col-xs-12">
                <CreateCarButton></CreateCarButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

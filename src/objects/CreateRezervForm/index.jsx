// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'moment';
import Datetime from 'react-datetime';
//import "path/to/node_modules/react-datetime/css/react-datetime.css";

//Components
import CreateRezervButton from '../../components/CreateRezervButton';
import ParkSelectButton from '../../components/ParkSelectButton';
import CarSelectButton from '../../components/CarSelectButton';

//Actions
import {
  alertify,
  HTTP_201_CREATED,
  HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { createRezervation } from "../../actions/rezervationActions";

// Local Modules
import './index.css';
import '../../../node_modules/react-datetime/css/react-datetime.css';

export default class CreateRezervForm extends React.Component {
constructor() {
  super();
  this.state = {
    redirect: false,
    park: "",
    car: "",
    start_time: null,
    end_time: null,

  };
  this.onChangeDate = this.onChangeDate.bind(this);
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  //this.setErrors = this.setErrors.bind(this);
  this.setRedirect = this.setRedirect.bind(this);
  this.onReset = this.onReset.bind(this);
}

onChangeDate = (e) => {
  this.setState({
    start_time: Moment(e).format("YYYY-MM-DDTHH:mmZ"),
    end_time: Moment(e).format("YYYY-MM-DDTHH:mmZ")
  });
}

onChange = (e) => {
  const state = this.state
  state[e.target.name] = e.target.value;
  this.setState(state);
  console.log(state);
}


setRedirect = (e) => {
  this.setState({
    redirect: true,
  });
}

onReset = (e) => {
  this.setState({
    redirect: false,
    park: "",
    car: "",
    start_time: null,
    end_time: null,
  });
}

onSubmit = (e) => {
  e.preventDefault();
  createRezervation(this.state);
}


  render() {

    const { redirect, car, park, errors } = this.state;

    if (redirect) {
       return <Redirect to={"/homepage/"}/>;
     }

    return(
      <form id="id_create_rezervation_form" onSubmit={this.onSubmit} onReset={this.onReset}>

        <div className="row rezerv-content">
          <div className="col-md-6">
            <ul>
              <li><p>Otopark</p></li>
              <li><p>Araç</p></li>
              <li><p>Başlangıç Tarihi</p><span>Saati</span></li>
              <li><p>Bitiş Tarihi</p><span>Saati</span></li>
            </ul>
          </div>

          <div className="col-md-6">
            <div className="col-xs-12">
              <ParkSelectButton value={this.state.park} onChangeEvent={this.onChange}></ParkSelectButton>
            </div>
            <div className="col-xs-12">
              <CarSelectButton value={this.state.car} onChangeEvent={this.onChange}></CarSelectButton>
            </div>

            <div className="col-xs-12">
            <Datetime className="date-start" dateFormat="DD.MM.YYYY" timeFormat="HH:mm"
               inputProps={{ name: "start_time", className: "date-start-input", placeholder: 'N/A'}}
               onChange={this.onChangeDate}/>
            </div>
            <div className="col-xs-12">
            <Datetime className="date-finish" dateFormat="DD.MM.YYYY" timeFormat="HH:mm"
               inputProps={{ name: "end_time", className: "date-finish-input", placeholder: 'N/A'}}
               onChange={this.onChangeDate}/>
            </div>
            <div className="col-md-12">
              <CreateRezervButton></CreateRezervButton>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

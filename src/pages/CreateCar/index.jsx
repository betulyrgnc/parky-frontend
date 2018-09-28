// Packages
import React from 'react';

// Objects
import CarInfo from '../../objects/CarInfo/index';
import Header from '../../objects/Header/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

export default class CreateCar extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row CreateCarPage">
          <div className="col-md-12">
            <Header></Header>
            <h1 className="head-text">ARAÇ OLUŞTUR</h1>
          </div>
          <div className="col-md-12">
            <CarInfo></CarInfo>
          </div>
          <div className="col-md-12">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

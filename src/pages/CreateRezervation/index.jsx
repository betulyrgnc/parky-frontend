// Packages
import React from 'react';

// Objects
import CreateRezervForm from '../../objects/CreateRezervForm/index';
import Header from '../../objects/Header/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

export default class CreateRezervation extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row CreateRezervPage">
          <div className="col-md-12">
            <Header></Header>
            <h1 className="head-text">REZERVASYON OLUŞTUR</h1>
          </div>
          <div className="col-md-12">
            <CreateRezervForm></CreateRezervForm>
          </div>
          <div className="col-md-12">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

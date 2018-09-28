// Packages
import React from 'react';
import { Link } from 'react-router-dom';

//Objects
import Header from '../../objects/Header/index';
import PastRezervations from '../../objects/PastRezervations/index';
import PersonelInfo from '../../objects/PersonelInfo/index';
import UpdateCarForm from '../../objects/UpdateCarForm/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

export default class Homepage extends React.Component {
  render() {
    return(
      <div className="info-profile">
        <Header></Header>
        <h2 className="profile">PROFİL</h2>
        <div className="col-xs-12">
          <PersonelInfo></PersonelInfo>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-6">
            <PastRezervations></PastRezervations>
          </div>
          <div className="col-xs-6">
            <Link to="/createRezervation/">
              <button type="submit" className="reservation-button">Rezervasyon Oluştur</button>
            </Link>
          </div>
        </div>
          <div className="col-xs-12">

          </div>
        <Footer></Footer>
      </div>
    );
  }
}

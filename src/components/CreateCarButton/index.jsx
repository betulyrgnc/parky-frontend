// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class CreateCarButton extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row createCar">
          <div className="col-xs-12">
              <button className="create-button" type="submit"><p>Ekle</p></button>
          </div>
        </div>
      </div>
    );
  }
}

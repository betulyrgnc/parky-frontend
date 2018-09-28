// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class SearchButton extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row createRezerv-button">
          <div className="col-xs-12">
            <button className="create-button" type="create-button"><p>Rezervasyon Oluştur</p></button>
          </div>
        </div>
      </div>
    );
  }
}

// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class Footer extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row footer">
          <div className="col-xs-12">
            <img className="footer-image" src="/images/footer-image.png" alt="footer"/>
            <img className="footer-logo" src="/images/footer-logo.png" alt="footer-logo"/>
          </div>
        </div>
      </div>
    );
  }
}

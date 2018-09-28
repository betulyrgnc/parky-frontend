// Packages
import React from 'react';

// Local Modules
import './index.css';

// Objects
import AccountMenu from '../../objects/AccountMenu/index';


export default class Header extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row header">
          <div className="col-xs-12">
            <img src="/images/header-image.png" alt="header"/>
              <AccountMenu></AccountMenu>
              <h1 className="header-text"><a href="/">PRKY</a></h1>
          </div>
        </div>
      </div>
    );
  }
}

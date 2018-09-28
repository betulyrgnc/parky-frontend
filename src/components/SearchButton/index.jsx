// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class SearchButton extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row search-button">
          <div className="col-xs-12">
            <form className="search">
              <input type="text" placeholder="Boş park yeri ara.." name="search"/>
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

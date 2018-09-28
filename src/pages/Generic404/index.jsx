// Packages
import React from 'react';

// Components

// Styles
import './index.css';


export default class Generic404 extends React.Component {
  componentWillMount() {
    document.title = "404 | PARKY";
  }

  render() {
    return (
      <div className="generic404-page">
        <div className="generic404-page__content">
          <p>Oppss!</p>
          <p>Page Not Found</p>
        </div>
      </div>
    );
  }
}

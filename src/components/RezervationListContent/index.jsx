// Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import DeleteRezervButton from '../../components/DeleteRezervButton/index'

// Local Moduless
import './index.css';


export default class RezervationListContent extends React.Component {
  render() {
    return(
      <div>
        {this.props.rezervations.map(rezervation =>
          <div key={rezervation.id} className={"rezv-info" + (rezervation.status + '-rezervation')}>
            <div className="rezervation-content-link">
              <ul>
                <li><span>Otopark: {rezervation.park.name}</span></li>
                <li><span>Başlangıç tarihi: {rezervation.start_time}</span></li>
                <li><span>Bitiş tarihi: {rezervation.end_time}</span></li>
              </ul>
            </div>
            <DeleteRezervButton rezervation={rezervation}></DeleteRezervButton>
          </div>
        )}
      </div>
    );
  }
}

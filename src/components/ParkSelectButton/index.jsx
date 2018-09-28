// Packages
import React from 'react';

// Actions
import { listPark } from "../../actions/rezervationActions";

// Local Modules
import './index.css';

export default class ParkSelectButton extends React.Component {
  constructor() {
    super();

    this.state = {
      parks: []
    };
  }

  componentWillMount() {
    listPark((body) => {
      this.setState({
        parks: body
      });
    });
  }

  render() {
    const { parks } = this.state;

    return(
      <div className ="select-box-park">
        <select className="park-select" name="park" onChange={this.props.onChangeEvent}>
          <option hidden>Park</option>
          {parks.map(park =>
            <option key={park.id} value={park.id}>{park.name}</option>
          )}
        </select>
      </div>
    );
  }
}

// Packages
import React from 'react';

// Actions
import { listCity } from "../../actions/coreActions";

// Local Modules
import './index.css';

export default class CitySelectButton extends React.Component {
  constructor() {
    super();

    this.state = {
      cities: []
    };
  }

  componentWillMount() {
    listCity((body) => {
      this.setState({
        cities: body
      });
    });
  }

  render() {
    const { cities } = this.state;

    return(
      <div className ="select-box-city">
        <select className="city-select" name="city" onChange={this.props.onChangeEvent}>
          <option hidden>City</option>
          {cities.map(city =>
            <option key={city.id} value={city.id}>{city.city}</option>
          )}
        </select>
      </div>
    );
  }
}

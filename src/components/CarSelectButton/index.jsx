// Packages
import React from 'react';

// Actions
import { listCar } from "../../actions/carActions";

// Local Modules
import './index.css';

export default class CarSelectButton extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: []
    };
  }

  componentWillMount() {
    listCar((body) => {
      this.setState({
        cars: body
      });
    });
  }

  render() {
    const { cars } = this.state;

    return(
      <div className ="select-box-car">
        <select className="car-select" name="car" onChange={this.props.onChangeEvent}>
          <option hidden>Car</option>
          {cars.map(car =>
            <option key={car.id} value={car.id}>{car.plate}</option>
          )}
        </select>
      </div>
    );
  }
}

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { retrieveUser } from '../../actions/userActions';
import { isAuthentication, alertify, HTTP_200_OK } from '../../actions/baseActions';

import './index.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      username: "",
      user: {},
      dropdownOpen: false
    };
  }

  componentWillMount() {
    if (isAuthentication()) {
      retrieveUser((response) => {
        if (response) {
          if (response.statusCode === HTTP_200_OK) {
            this.setUser(response.body);
          } else {
            alertify.error("An unexpected error has occurred and try again later.");
          }
        } else {
          alertify.error("An unexpected error has occurred and try again later.");
        }
      });
    }
}

  setUser = (user) => {
    this.setState({
      user: user
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown className="account-menu" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret className="account-title">
          {this.state.user.first_name} {this.state.user.last_name}
        </DropdownToggle>
        <DropdownMenu className="account-menu-item">
        <Link to= "/info/">
          <DropdownItem className="account-button">Profil</DropdownItem>
        </Link>
          <DropdownItem divider />
          <DropdownItem className="account-button"><a href="/contact/">Hakkımızda</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="account-button"><a className="exit" href="/logout/">Çıkış</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

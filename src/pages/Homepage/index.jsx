// Packages
import React from 'react';
import { Redirect } from 'react-router-dom';

//Objects
import Header from '../../objects/Header/index';
import SearchButton from '../../components/SearchButton/index';
import MyMap from '../../components/MyMap/index';
import Footer from '../../objects/Footer/index';

// Actions
import { isAuthentication } from '../../actions/baseActions';

// Local Modules
import './index.css';

export default class Homepage extends React.Component {
  render() {
    if (!isAuthentication()) {
      return (
        <Redirect to="/login/"/>
      )
    }

    return(
      <div className="homepage">
        <Header></Header>
        <SearchButton></SearchButton>
        <div className="row">
        	<div className="col-xs-12">
        		<MyMap></MyMap>
        	</div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

// Packages
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Pages
import Login from './pages/Login/index';
import Logout from './pages/Logout/index';
import Register from './pages/Register/index';
import Homepage from './pages/Homepage/index';
import InfoProfile from './pages/InfoProfile/index';
import CreateRezervation from './pages/CreateRezervation/index';
import CreateCar from './pages/CreateCar/index';
import Contact from './pages/Contact/index';
import Generic404 from './pages/Generic404/index';

// Local Modules
import './index.css';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register/" component={Register} />
      <Route exact path="/homepage/" component={Homepage} />
      <Route exact path="/info/" component={InfoProfile} />
      <Route exact path="/createRezervation/" component={CreateRezervation} />
      <Route exact path="/createCar/" component={CreateCar} />
      <Route exact path="/contact/" component={Contact} />
      <Route exact path="/logout/" component={Logout} />
      <Route exact path='*' component={Generic404} />
    </Switch>
  </Router>
)


export default AppRouter;

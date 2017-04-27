import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import StatsPage from './containers/StatsPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import SettingsPage from './containers/SettingsPage';
import Auth from './modules/Auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App-intro">
            <Route exact path="/" render={() => (
                Auth.isUserAuthenticated() ? <StatsPage /> : <Home />
            )}/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/logout" render={() => {
                Auth.deauthenticateUser();
                return(<Redirect to="/"/>);
            }}/>
        </div>
      </div>
    );
  }
}

export default App;

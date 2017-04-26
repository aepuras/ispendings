import React from 'react';
import axios from 'axios-es6';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.js';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      secretData: '',
      message: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    let config = {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    };

    axios.get('/api/dashboard', config)
        .then(function (response) {
            this.setState({
              secretData: response.data.message
            });
        }.bind(this));

    axios.get('/api/message', config)
        .then(function (response) {
            this.setState({
                message: response.data.message
            });
        }.bind(this));
  }


  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} message={this.state.message}/>);
  }

}

export default DashboardPage;

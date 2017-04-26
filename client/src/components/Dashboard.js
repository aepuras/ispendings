import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ secretData, message }) => (
    <div>
        {secretData && <div>{secretData}</div>}
        {message && <div>{message}</div>}
    </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Dashboard;

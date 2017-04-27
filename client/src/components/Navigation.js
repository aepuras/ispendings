import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Auth from '../modules/Auth';

const Navigation = () => (
    <nav>
        <div className="logo"></div>
        <div><Link to="/">Home</Link></div>
        {Auth.isUserAuthenticated() && <div><Link to="/logout">Logout</Link></div>}
        {!Auth.isUserAuthenticated() && <div><Link to="/login">Login</Link></div>}
        {!Auth.isUserAuthenticated() && <div><Link to="/register">Register</Link></div>}
    </nav>
)

export default Navigation;

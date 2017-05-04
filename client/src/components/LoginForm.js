import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './LoginForm.css';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <div className="loginForm">
        <form action="/" onSubmit={onSubmit}>
            {errors.summary && <p className="error-message">{errors.summary}</p>}
            <div className={classnames('field', {error: !!errors.email})}>
                <input className="login-input-field" type="text" id="email" name="email" value={user.email} onChange={onChange} placeholder="E-mail"/>
                <span className="error-message">{errors.email}</span>
            </div>

            <div className={classnames('field', {error: !!errors.password})}>
                <input className="login-input-field" type="password" id="password" name="password" value={user.password} onChange={onChange} placeholder="Password" />
                <span className="error-message">{errors.password}</span>
            </div>

            <input className="login-button" type="submit" value="Login" />
        </form>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default LoginForm;

import { AlternateEmail, LockOutlined, PersonOutlineOutlined } from '@material-ui/icons';
import React from 'react';
// import PropTypes from 'prop-types';
import "./register.scss";

Login.propTypes = {

};

function Login(props) {

    return (
        <div className="register">
            <div className="wrapper">
                <div className="left">
                    <span className="logo">W</span>
                </div>
                <div className="right">
                    <div className="inputItems">
                        <input type="email" className="inputTag" placeholder="Username" />
                        <PersonOutlineOutlined className="icon" />
                    </div>
                    <div className="inputItems">
                        <input type="email" className="inputTag" placeholder="Email" />
                        <AlternateEmail className="icon" />
                    </div>
                    <div className="inputItems">
                        <input type="password" className="inputTag" placeholder="Password" />
                        <LockOutlined className="icon" />
                    </div>
                    <div className="inputItems">
                        <input type="password" className="inputTag" placeholder="Confirm password" />
                        <LockOutlined className="icon" />
                    </div>
                    <button className="loginBtn registerBtn" >Register</button>
                    <span className="text" >Have an account?</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
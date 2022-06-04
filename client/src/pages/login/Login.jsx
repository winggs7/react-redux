import { AlternateEmail, LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import "./login.scss";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/userSlice';

Login.propTypes = {

};

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin({ email, password }));
    }

    return (
        <div className="login">
            <div className="wrapper">
                <div className="left">
                    <span className="logo">W</span>
                </div>
                <div className="right">
                    <div className="inputItems">
                        <input type="email" className="inputTag" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <AlternateEmail className="icon" />
                    </div>
                    <div className="inputItems">
                        <input type="password" className="inputTag" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <LockOutlined className="icon" />
                    </div>
                    <button className="loginBtn" onClick={(e) => handleSubmit(e)} >Login</button>
                    <span className="text">Forgot your password?</span>
                    <Link to="/register" className="linkDom">
                        <button className="loginBtn registerBtn">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React from 'react';
import './Login.css';
import Img from './assets/images/img3.jpg';
import Header from "./Header";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {}

    render() {
        return (

            <div className="box-container">
                <img src={Img} alt="bg" className="bg"/>
            <div className="inner-container">

                <div className="box">

                    <div className="input-group">
                        <label className="login-label" htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLogin
                            .bind(this)}>Login</button>
                </div>
            </div>
            </div>
        );
    }

}

export  default Login;
import React from 'react';
import axios from 'axios';
import './Login.css';
import Img from './assets/images/img4.png';
import Header from "./Header";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: '',
                password: ''
            }

        };
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };



    submitHandler(inputFields) {
        axios.post('/login', inputFields).then(
            () => {
                console.log('form submitted');
            }
        );
    console.log('form submitted');

    }
    inputHandler(e) {
        let inputFields = {...this.state.inputFields};
        inputFields[e.target.username] = e.target.value;
            inputFields[e.target.password] = e.target.value;
        this.setState({
            inputFields
        });

    }

    render() {
        return (

            <div className="box-container">
                <img src={Img} alt="bg" className="bg"/>
            <div className="inner-container">

                <div className="box">

                    <div className="input-group">
                        <label className="login-label" htmlFor="username">Username</label>
                        <input
                            type="email"
                            name="username"
                            className="login-input"
                            placeholder="Username"
                            value={this.state.username}
                             onChange={this.inputHandler}/>
                    </div>

                    <div className="input-group">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.inputHandler}/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this.submitHandler}>Login</button>
                </div>
            </div>
            </div>
        );
    }

}

export  default Login;
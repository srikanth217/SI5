import React from 'react';
import axios from 'axios';
import './Login.css';
import Img from './assets/images/img1.png';
import Header from "./Header";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: null,
                password: null
            }
        };
    };
    submitHandler = () => {
        axios.post('/hr/login', this.state.inputFields).then(
            () => {

            }
        );
        console.log(this.state.inputFields);

    };
    userHandler = (event) => {
        let inputFields = {...this.state.inputFields};
        inputFields[event.target.name] = event.target.value;
        this.setState({
            inputFields
        });


    };


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
                             onChange={this.userHandler}/>
                    </div>

                    <div className="input-group">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.userHandler}/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={(event) =>this.submitHandler(event, this.state.inputFields)}>Login</button>
                </div>
            </div>
            </div>
        );
    }

}

export  default Login;
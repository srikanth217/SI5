import React from 'react';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: null,
                password: null
            },
            isHrLogin: false,
        };
    };

    submitHandler = () => {
        console.log(this.state);
        if (this.state.isHrLogin) {
        } else {
        }
    };

    userHandler = (event) => {
        let inputFields = {...this.state.inputFields};
        inputFields[event.target.name] = event.target.value;
        this.setState({
            inputFields
        });
    };

    toggleIsHrLogin = () => {
        this.setState((prevState) => {
            return { isHrLogin: !prevState.isHrLogin };
        });
    };

    render() {
        return (
            <div className="login">
                <div className="container justify-content-center" style={{height: '100vh'}}>
                    <h1 className="mt-5 display-4 text-center">Log In</h1>
                    <div className="form-group text-center">
                        <input type="checkbox" className="switch_1" onChange={this.toggleIsHrLogin} checked={this.state.isHrLogin} />
                        <small className="form-text text-muted">You are Logging as {!this.state.isHrLogin ? 'Employee' : 'HR'}. Toggle above to change</small>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg"
                                   placeholder="Username" name="username" onChange={this.userHandler} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg"
                                   placeholder="Password" name="password" onChange={this.userHandler} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-info btn-block mt-4"
                                    onClick={(event) =>this.submitHandler(event, this.state.inputFields)}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export  default Login;

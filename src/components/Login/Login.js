import React from 'react';

import './Login.css';

const login = (props) => {
    return (
        <div className="login">
            <div className="container justify-content-center" style={{height: '100vh'}}>
                <h1 className="display-4 text-center" style={{paddingTop: '15vh'}}>Log In</h1>
                <div className="form-group text-center">
                    <input type="checkbox" className="switch_1" onChange={props.toggleIsHrLogin} checked={props.isHrLogin} />
                    <small className="form-text text-muted">You are Logging as {!props.isHrLogin ? 'Employee' : 'HR'}. Toggle above to change</small>
                </div>
                <div className="form">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg"
                               placeholder="Username" name="username" onChange={props.changeInputFieldsHandler} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-lg"
                               placeholder="Password" name="password" onChange={props.changeInputFieldsHandler} />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-lg btn-info btn-block mt-4"
                                onClick={props.submitLoginHandler}>
                            Login
                        </button>
                        {props.loginError
                            ? <div className="form-text text-danger text-center">Invalid credentials, please try again.</div>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;

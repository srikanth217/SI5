import React from 'react';
import axios from 'axios';
import './Dashboard.css';
import Navigation from '../../components/Navigation/Navigation';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: null,
                password: null
            },
            isHrLogin: false,
            loginError: false,
            loginSuccess: false,
            hrDashboard: {
                navItems: [
                    { title: 'view employees', active: true },
                    { title: 'add employee' },
                ],
            },
            employeeDashboard: {
                navItems: [
                    { title: 'view', active: true },
                    { title: 'edit' },
                ],
            },
        };
    };

    submitLoginHandler = () => {
        console.log(this.state);
        if (this.state.isHrLogin) {
        } else {
        }
        this.setState({ loginSuccess: true });
    };

    changeInputFieldsHandler = (event) => {
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

    getLoginJsx = () => {
        return (
            <div className="login">
                <div className="container justify-content-center" style={{height: '100vh'}}>
                    <h1 className="display-4 text-center" style={{paddingTop: '15vh'}}>Log In</h1>
                    <div className="form-group text-center">
                        <input type="checkbox" className="switch_1" onChange={this.toggleIsHrLogin} checked={this.state.isHrLogin} />
                        <small className="form-text text-muted">You are Logging as {!this.state.isHrLogin ? 'Employee' : 'HR'}. Toggle above to change</small>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg"
                                   placeholder="Username" name="username" onChange={this.changeInputFieldsHandler} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg"
                                   placeholder="Password" name="password" onChange={this.changeInputFieldsHandler} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-lg btn-info btn-block mt-4"
                                    onClick={(event) => this.submitLoginHandler(event, this.state.inputFields)}>
                                Login
                            </button>
                            {this.state.loginError
                                ? <div className="form-text text-danger text-center">Invalid credentials, please try again.</div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    getHrDashboard = () => {
        const hrDashboard = this.state.hrDashboard;
        return (
            <div>
                <Navigation navigationItems={hrDashboard.navItems} />
            </div>
        );
    };

    getEmployeeDashboard = () => {
        const employeeDashboard = this.state.employeeDashboard;
        return (
            <div>
                <Navigation navigationItems={employeeDashboard.navItems} />
            </div>
        );
    };

    render() {
        let dashboard = this.getLoginJsx();
        if (this.state.loginSuccess) {
            dashboard = this.state.isHrLogin ? this.getHrDashboard() : this.getEmployeeDashboard();
        }
        return dashboard;
    }
}

export default Dashboard;

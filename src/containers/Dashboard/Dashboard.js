import React from 'react';
import axios from 'axios';

import './Dashboard.css';
import Login from '../../components/Login/Login';
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
            <Login
                isHrLogin={this.state.isHrLogin}
                loginError={this.state.loginError}
                toggleIsHrLogin={this.toggleIsHrLogin}
                changeInputFieldsHandler={this.changeInputFieldsHandler}
                submitLoginHandler={(event) => this.submitLoginHandler(event, this.state.inputFields)}
            />
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

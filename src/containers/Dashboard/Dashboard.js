import React from 'react';
import axios from 'axios';

import './Dashboard.css';
import Login from '../../components/Login/Login';
import Navigation from '../../components/Navigation/Navigation';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: null,
                password: null
            },
            isHrLogin: true,
            loginError: false,
            loginSuccess: false,
            hrDashboard: {
                navItems: [
                    { title: 'view employees', active: true },
                    { title: 'add employee', active: false },
                ],
                employees: [],
            },
            employeeDashboard: {
                navItems: [
                    { title: 'view', active: false },
                    { title: 'edit', active: false },
                ],
                employees: [],
            },
        };
    };

    submitLoginHandler = () => {
        // console.log(this.state);
        const dashboardKeyName = `${this.state.isHrLogin ? 'hr' : 'employee'}Dashboard`;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        [dashboardKeyName]: {
                            ...prevState[dashboardKeyName],
                            employees: this.state.isHrLogin ? res.data : [res.data[0]],
                        },
                        loginSuccess: true
                    };
                });
            })
            .catch(() => this.setState({ loginError: true, loginSuccess: false }));
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

    deleteEmployeeHandler = (emploeeId) => {
        this.setState((prevState) => {
            const employees = prevState.hrDashboard.employees.filter(employee => employee.id !== emploeeId);
            return {
                ...prevState,
                hrDashboard: {
                    ...prevState.hrDashboard,
                    employees,
                }
            };
        });
    };

    getHrDashboard = () => {
        const hrDashboard = this.state.hrDashboard;
        const employeeCards = hrDashboard.employees.map(employee => {
            return {
                cardHeader: employee.id,
                cardTitle: employee.name,
                cardButtons: [
                    { btnColor: 'btn-info', title: 'view' },
                    { btnColor: 'btn-warning', title: 'update' },
                    { btnColor: 'btn-danger', title: 'delete', clicked: () => this.deleteEmployeeHandler(employee.id) }
                ],
            }
        });
        return (
            <div>
                <Navigation navigationItems={hrDashboard.navItems} />
                <EmployeeCards employeeCards={employeeCards} />
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

import React from 'react';
import axios from 'axios';

import './Dashboard.css';
import Login from '../../components/Login/Login';
import Navigation from '../../components/Navigation/Navigation';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';
import Footer from '../../components/Footer/Footer';

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
                navItems: {
                    view: { title: 'view employees', active: false },
                    add: { title: 'add employee', active: false },
                },
                employees: [],
            },
            employeeDashboard: {
                navItems: {
                    view: { title: 'view', active: false },
                    edit: { title: 'edit', active: false },
                },
                employees: [],
            },
        };
    };

    updatedNavItemsFor = (dashboard = 'employee', key) => {
        dashboard += 'Dashboard';
        this.setState((prevState) => {
            const navItems = { ...prevState[dashboard].navItems };
            Object.keys(navItems).forEach(key => navItems[key].active = false);
            navItems[key].active = true;
            return {
                ...prevState,
                [dashboard]: {
                    ...prevState[dashboard],
                    navItems,
                }
            }
        });
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

    getHrViewEmployee = () => {
        const hrDashboard = this.state.hrDashboard;
        if (hrDashboard.navItems.view.active) {
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
            return <EmployeeCards employeeCards={employeeCards} />;
        }
        return null;
    };

    getHrDashboard = () => {
        const hrDashboard = this.state.hrDashboard;
        const navItems = Object.keys(hrDashboard.navItems).map(key => {
            return {
                ...hrDashboard.navItems[key],
                clicked: () => this.updatedNavItemsFor('hr', key),
            };
        });
        return (
            <div>
                <Navigation navigationItems={navItems} />
                {this.getHrViewEmployee()}
            </div>
        );
    };

    getEmployeeDashboard = () => {
        const employeeDashboard = this.state.employeeDashboard;
        const navItems = Object.keys(employeeDashboard.navItems).map(key => {
            return {
                ...employeeDashboard.navItems[key],
                clicked: () => this.updatedNavItemsFor('employee', key),
            };
        });
        return (
            <div>
                <Navigation navigationItems={navItems} />
            </div>
        );
    };

    render() {
        let dashboard = this.getLogin();
        if (this.state.loginSuccess) {
            dashboard = (
                <div>
                    {this.state.isHrLogin ? this.getHrDashboard() : this.getEmployeeDashboard()}
                    <Footer />
                </div>
            );
        }
        return dashboard;
    }

    getLogin = () => {
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

    submitLoginHandler = () => {
        // console.log(this.state);
        const dashboardKeyName = `${this.state.isHrLogin ? 'hr' : 'employee'}Dashboard`;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState((prevState) => {
                    const navItems = {
                        ...prevState[dashboardKeyName].navItems,
                        view: {
                            ...prevState[dashboardKeyName].navItems.view,
                            active: true,
                        }
                    };
                    return {
                        ...prevState,
                        [dashboardKeyName]: {
                            ...prevState[dashboardKeyName],
                            navItems,
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
}

export default Dashboard;

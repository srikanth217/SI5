import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import './Dashboard.css';
import Login from '../../components/Login/Login';
import Navigation from '../../components/Navigation/Navigation';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';
import EmployeeCard from '../../components/EmployeeCards/EmployeeCard/EmployeeCard';
import Footer from '../../components/UI/Footer/Footer';
import Spinner from '../../components/UI/Spinner/Spinner';
import AddEmployee from '../../components/AddEmployee/AddEmployee';

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
            loading: false,
            dashboardLoading: true,
            hrDashboard: {
                navItems: {
                    view: { title: 'view employees', active: false },
                    add: { title: 'add employee', active: false },
                },
                employees: [],
                updateEmployeeId: null,
                newEmployee: {},
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
                    updateEmployeeId: null,
                }
            }
        });
    };

    deleteEmployeeHandler = (emploeeId) => {
        this.setState((prevState) => {
            const employees = prevState.hrDashboard.employees.filter(employee => employee.employeeId !== emploeeId);
            return {
                ...prevState,
                hrDashboard: {
                    ...prevState.hrDashboard,
                    employees,
                }
            };
        });
    };

    updateEmployeeHandler = (emploeeId) => {
        this.setState((prevState) => {
            const navItems = { ...prevState.hrDashboard.navItems };
            Object.keys(navItems).forEach(key => navItems[key].active = false);
            return {
                ...prevState,
                hrDashboard: {
                    ...prevState.hrDashboard,
                    navItems,
                    updateEmployeeId: emploeeId,
                },
                dashboardLoading: false,
                loading: false,
            };
        });
    };

    changeEmployeeFieldsHandler = (event) => {
        if (this.state.hrDashboard.updateEmployeeId) {
            const employees = [...this.state.hrDashboard.employees ];
            const employeeIndex = employees.findIndex(employee => employee.employeeId === this.state.hrDashboard.updateEmployeeId);
            const employee = employees[employeeIndex];
            if (employee) {
                employee[event.target.name] = event.target.value;
            }
            this.setState({
                hrDashboard: {
                    ...this.state.hrDashboard,
                    employees,
                },
            });
        } else {
            const newEmployee = this.state.hrDashboard.newEmployee;
            if (newEmployee) {
                newEmployee[event.target.name] = event.target.value;
            }
            this.setState({
                hrDashboard: {
                    ...this.state.hrDashboard,
                    newEmployee,
                },
            });
        }
    };

    submitPatchEmployeeHandler = async () => {
        try {
            const hrDashboard = { ...this.state.hrDashboard };
            const employee = hrDashboard.employees.find(employee => employee.employeeId === hrDashboard.updateEmployeeId);
            if (employee) {
                await axios.patch('/hr/update-employee', employee);
                this.updatedNavItemsFor('hr', 'view');
            } else {
                this.updatedNavItemsFor('hr', 'view');
            }
        } catch (e) {
            this.updatedNavItemsFor('hr', 'view');
        }
    };

    addNewEmployee = (employeeId) => {
        this.setState((prevState) => {
            const addedEmployee = {...prevState.hrDashboard.newEmployee};
            const employees = [...prevState.hrDashboard.employees, addedEmployee];
            addedEmployee.employeeId = employeeId || employees.length + 1;
            const navItems = { ...prevState.hrDashboard.navItems };
            Object.keys(navItems).forEach(key => navItems[key].active = false);
            navItems.view.active = true;
            return {
                ...prevState,
                hrDashboard: {
                    ...prevState.hrDashboard,
                    navItems,
                    employees,
                    newEmployee: {},
                },
            };
        });
    };

    submitAddEmployeeHandler = async () => {
        try {
            const hrDashboard = { ...this.state.hrDashboard };
            const newEmployee = { ...hrDashboard.newEmployee };
            if (newEmployee) {
                const createEmployeeRes = await axios.post('/hr/create-employee', newEmployee);
                if (createEmployeeRes) {
                    this.addNewEmployee(createEmployeeRes.data.response)
                } else {
                    this.addNewEmployee();
                }
            }
        } catch (e) {
            this.addNewEmployee();
        }
    };

    getHrViewEmployee = () => {
        const hrDashboard = this.state.hrDashboard;
        let hrViewEmployee = null;
        if (hrDashboard.navItems.view.active) {
            const employeeCards = hrDashboard.employees.map(employee => {
                const date = new Date();
                return {
                    empId: employee.employeeId,
                    empName: `${employee.firstName} ${employee.lastName}`,
                    empAge: employee.age ? employee.age : Math.floor(Math.random() * (53 - 21)) + 21,
                    empJoinDate: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
                    cardButtons: [
                        { btnColor: 'btn-info', title: 'update', clicked: () => this.updateEmployeeHandler(employee.employeeId) },
                        { btnColor: 'btn-danger', title: 'delete', clicked: () => this.deleteEmployeeHandler(employee.employeeId) }
                    ],
                }
            });
            hrViewEmployee = <EmployeeCards employeeCards={employeeCards} />;
        }
        if (hrDashboard.updateEmployeeId || hrDashboard.navItems.add.active) {
            let employee = hrDashboard.updateEmployeeId
                ? hrDashboard.employees.find(employee => employee.employeeId === hrDashboard.updateEmployeeId)
                : hrDashboard.newEmployee;
            if (hrDashboard.updateEmployeeId) {
                employee = _.pick(employee, [
                    'firstName', 'lastName', 'dateOfBirth', 'age',
                    'maritalStatus', 'jobId', 'hiringDate', 'joiningDate',
                    'nameOfSchool', 'degree', 'startDate', 'endDate',
                    'salary', 'isMonthly', 'phoneNumber', 'email', 'address'
                ]);
            }
            hrViewEmployee = (
                <AddEmployee
                    title={hrDashboard.updateEmployeeId ? `update employee Id: ${hrDashboard.updateEmployeeId}` : 'add employee'}
                    submitText={hrDashboard.updateEmployeeId ? 'update employee' : 'add employee'}
                    goBackHandler={() => this.updatedNavItemsFor('hr', 'view')}
                    employee={employee}
                    changeEmployeeFieldsHandler={this.changeEmployeeFieldsHandler}
                    submitPatchEmployeeHandler={hrDashboard.updateEmployeeId ? this.submitPatchEmployeeHandler : this.submitAddEmployeeHandler}/>
            );
        }
        return hrViewEmployee;
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
                {this.state.dashboardLoading ? <Spinner/> : this.getHrViewEmployee()}
            </div>
        );
    };

    getEmployeeView = () => {
        const employeeDashboard = this.state.employeeDashboard;
        let employeeView = null;
        if (employeeDashboard.navItems.view.active) {
            const employee = _.pick(employeeDashboard.employees[0], [
                'employeeId', 'firstName', 'lastName', 'dateOfBirth', 'age',
                'maritalStatus', 'jobId', 'hiringDate', 'joiningDate',
                'nameOfSchool', 'degree', 'startDate', 'endDate',
                'salary', 'isMonthly', 'phoneNumber', 'email', 'address',
                'accountNumber'
            ]);
            const date = new Date();
            employeeView = <EmployeeCard
                empId={employee.employeeId}
                empName={`${employee.firstName} ${employee.lastName}`}
                empAge={employee.age ? employee.age : Math.floor(Math.random() * (53 - 21)) + 21}
                empJoinDate={employee.joinDate ? employee.joinDate : `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`}
                empAccountNumber={employee.accountNumber}
            />;
        }
        return (
            <div className="container">
                {employeeView}
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
                {this.state.dashboardLoading ? <Spinner/> : this.getEmployeeView()}
            </div>
        );
    };

    render() {
        let dashboard = this.getLogin();
        if (this.state.loading) {
            dashboard = <div style={{marginTop: '36vh'}}>
                <Spinner />
            </div>;
        }
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

    submitLoginHandler = async () => {
        this.setState({ loading: true });
        const dashboardKeyName = `${this.state.isHrLogin ? 'hr' : 'employee'}Dashboard`;
        const loginUrl = `/login/${this.state.isHrLogin ? 'hr' : 'payroll'}-login`;
        try {
            const loginResponse = await axios.post(loginUrl, {
                key: this.state.inputFields.username,
                value: this.state.inputFields.password,
            });
            if (loginResponse && loginResponse.data && loginResponse.data.statusId) {
                this.setState({ loginError: false, loginSuccess: true, loading: false });
                const employeeDataUrl = this.state.isHrLogin
                    ? '/hr/get-employees'
                    : `/payroll/get-employee-details?employeeId=${this.state.inputFields.username}`;
                const employeeDataResponse = await axios.get(employeeDataUrl);
                if (employeeDataResponse) {
                    const employees = this.state.isHrLogin
                        ? employeeDataResponse.data.response.splice(0, 1)
                        : [{
                            ...employeeDataResponse.data.response.payrollDetails,
                            ...employeeDataResponse.data.response.bankDetails,
                            ...employeeDataResponse.data.response.taxDetails,
                        }];
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
                                employees,
                            },
                            dashboardLoading: false,
                        };
                    });
                } else {
                    this.setState({ dashboardLoading: true });
                }
            } else {
                this.setState({ loginError: true, loginSuccess: false, loading: false });
            }
        } catch (e) {
            this.setState({ loginError: true, loginSuccess: false, loading: false });
        }
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

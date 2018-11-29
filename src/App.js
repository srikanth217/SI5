import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import AddEmployee from './components/AddEmployee/AddEmployee';
import employeeCards from "./components/EmployeeCards/EmployeeCards";

class App extends Component {
  state = {
      employee: {
          firstName: 'F',
          dateOfBirth: '12/12/2018'.split('/').reverse().join('-'),
          lastName: 'k',
          age:'22',
          maritalStatus:'single',
          jobId:'12',
          hiringDate: '12/12/2018'.split('/').reverse().join('-'),
          joiningDate: '12/12/2018'.split('/').reverse().join('-'),
          nameOfSchool: 'uncc',
          degree: 'masters',
          startDate: '12/12/2018'.split('/').reverse().join('-'),
          endDate: '12/12/2018'.split('/').reverse().join('-'),
          salary: '60000',
          isMonthly: 'false',
          phoneNumber: '7049499235',
          email: 'abc',
          address: "430 barton creek drive"
      }
  };

    changeEmployeeFieldsHandler = (event) => {
        let employee = { ...this.state.employee };
        employee[event.target.name] = event.target.value;
        console.log(this.state.employee);
        this.setState({ employee });
    };
  render() {
    return (
        // <AddEmployee employee={this.state.employee} changeEmployeeFieldsHandler={this.changeEmployeeFieldsHandler} />
        <Dashboard/>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import AddEmployee from "./containers/AddEmployee/AddEmployee";
import AddEmploye from './components/AddEmployee/AddEmployee';

class App extends Component {
  render() {
    const employee = {
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





    };
    return (
        <AddEmploye employee={employee} />
    );
  }
}

export default App;

import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import AddEmployee from "./containers/AddEmployee/AddEmployee";
import AddEmploye from './components/AddEmployee/AddEmployee';

class App extends Component {
  render() {
    const employee = {
      firstName: 'F',
      dateOfBirth: '12/12/2018'.split('/').reverse().join('-')
    };
    return (
        <AddEmploye employee={employee} />
    );
  }
}

export default App;

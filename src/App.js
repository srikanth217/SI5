import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import AddEmployee from "./containers/AddEmployee/AddEmployee";
import AddEmploye from './components/AddEmployee/AddEmployee';

class App extends Component {
  render() {
    return (
        <AddEmploye />
    );
  }
}

export default App;

import React, { Component } from 'react';
import Login from './Login';
import './App.css';
import AddEmployee from './containers/AddEmployee/AddEmployee';


class App extends Component {
  render() {
    return (
        <div className="root__container">

         <Login/>

        </div>


    );
  }
}

export default App;

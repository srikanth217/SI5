import React, { Component } from 'react';
import Login from './Login';
import './App.css';
import AddEmployee from './AddEmployee';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
        <div className="root-container">
            <Header/>
         <Login/>
            <Footer/>
        </div>


    );
  }
}

export default App;

import React from 'react';
import './AddEmployee.css';
import Img from './assets/images/img4.png';
import axios from "axios";


class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputDetails: {
              id: null,
              fname: null,
              lname: null,
              gender: null,
              age: null,
              dob: null,
              email: null,
              phone: null,
              role: null,
              description: null,
              supervisor: null,
              hdate: null,
              jdate: null,
              edate: null,
              salary: null,
              address: null
          }
        };
    };
    inputHandler = (event) => {
       let inputDetails = {...this.state.inputDetails};
       inputDetails[event.target.name] = event.target.value;
       this.setState(
           {inputDetails}
       );
    };
   buttonHandler = () => {
       axios.post('/hr/create-employee', this.state.inputDetails).then(
           () => {
               console.log('input',this.state.inputDetails);
           }
       );
   };

    render() {
        return (

            <form className="main">
                <img src={Img} alt="bg" className="bg"/>
                <div className="row__top">
                    <div className="column__left">
                        <h3>Employee Details</h3>
                        <div className="row" id="user-row">
                            <label htmlFor="id" className="left" id="emp-id"> EmployeeID </label>
                            <input name="id" className="right" type="number" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="fname-row">
                            <label htmlFor="fname" className="left" id="fname"> FirstName </label>
                            <input name="fname" className="right" type="text" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="lname-row">
                            <label htmlFor="lname" className="left" id="lname"> LastName </label>
                            <input name="lname" className="right" type="text" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="gender-row">
                            <label htmlFor="gender" className="left" id="gen"> Gender </label>
                            <input name="gender" className="right" type="text" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="age-row">
                            <label htmlFor="age" className="left" id="emp-age"> Age </label>
                            <input name="age" className="right" type="number" onChange={this.inputHandler} required/>

                        </div>
                        <div className="row" id="dob-row">
                            <label htmlFor="dob" className="left" id="emp-dob"> DOB </label>
                            <input name="dob" className="right" type="date" onChange={this.inputHandler} required/>

                        </div>
                        <div className="row" id="email-row">
                            <label htmlFor="email" className="left" id="email-id"> Email </label>
                            <input name="email" className="right" type="email" onChange={this.inputHandler} required/>

                        </div>
                        <div className="row" id="phone-row">
                            <label htmlFor="phone" className="left" id="emp-phone"> Phone </label>
                            <input type="tel" className="right" name="phone"
                                   placeholder="123-456-7890"
                                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                   onChange={this.inputHandler}
                                   required/>
                        </div>
                    </div>
                    <div className="column__right">
                        <h3>Job Description</h3>
                        <div className="row" id="role-row">
                            <label htmlFor="role" className="left" id="role-id"> Role </label>
                            <input name="role" className="right" type="text" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="descr-row">
                            <label htmlFor="role" className="left" id="decription"> Description </label>
                            <textarea className="right" name="description" onChange={this.inputHandler}/>
                        </div>
                        <div className="row" id="supervisor-row">
                            <label htmlFor="role" className="left" id="role-id"> Supervisor </label>
                            <input name="supervisor" className="right" type="text" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="hdate-row">
                            <label htmlFor="hdate" className="left" id="hdate"> Hiring Date </label>
                            <input name="hdate" className="right" type="date" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="jdate-row">
                            <label htmlFor="jdate" className="left" id="jdate"> Joining Date </label>
                            <input name="jdate" className="right" type="date" onChange={this.inputHandler} required/>
                        </div>
                        <div className="row" id="edate-row">
                            <label htmlFor="edate" className="left" id="edate"> End Date </label>
                            <input name="edate" className="right" type="date" onChange={this.inputHandler}/>
                        </div>
                        <div className="row" id="salary-row">
                            <label htmlFor="age" className="left" id="salaryemp"> Salary </label>
                            <input name="salary" className="right" type="number" onChange={this.inputHandler}required/>
                        </div>
                        <div className="row" id="address-row">
                            <label htmlFor="age" className="left" id="adress"> Address </label>
                            <textarea className="right" name="address" onChange={this.inputHandler}/>
                        </div>
                    </div>
                </div>
                <div className="row__button">
                    <button className="submit__button" type="submit" name="submit" onSubmit={(event) =>this.buttonHandler(event, this.state.inputDetails)}>Submit </button>
                </div>
            </form>

                );
    };

}

export default AddEmployee;

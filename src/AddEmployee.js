import React from 'react';
import './AddEmployee.css'

const AddEmployee = () => (

    <form className="main">

    <div className="column1">
     <h3>Employee Details</h3>
        <div className="row" id="user-row">
            <label for="id" className="left" id="emp-id"> EmployeeID </label>
            <input name="id" className="right" type="number" required/>

        </div>
        <div className="row" id="fname-row">
            <label for="fname" className="left" id="fname"> FirstName </label>
            <input name="fname" className="right" type="text" required/>

        </div>
        <div className="row" id="lname-row">
            <label for="lname" className="left" id="lname"> LastName </label>
            <input name="lname" className="right" type="text" required/>

        </div>
        <div className="row" id="gender-row">
            <label for="gender" className="left" id="gen"> Gender </label>
            <input name="gender" className="right" type="text" required/>

        </div>
        <div className="row" id="age-row">
            <label for="age" className="left" id="emp-age"> Age </label>
            <input name="age" className="right" type="number" required/>

        </div>

        <div className="row" id="dob-row">
            <label for="dob" className="left" id="emp-dob"> DOB </label>
            <input name="dob" className="right" type="date" required/>

        </div>
        <div className="row" id="email-row">
            <label for="email" className="left" id="email-id"> Email </label>
            <input name="email" className="right" type="email" required/>

        </div>
        <div className="row" id="phone-row">
            <label for="phone" className="left" id="emp-phone"> Phone </label>
            <input type="tel" className="right" name="phone"
                   placeholder="123-456-7890"
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                   required />

        </div>




    </div>

    <div className="column2">
      <h3>Job Description</h3>
        <div className="row" id="role-row">
            <label for="role" className="left" id="role-id"> Role </label>
            <input name="role" className="right" type="text" required/>

        </div>
        <div className="row" id="descr-row">
            <label for="role" className="left" id="decription"> Description </label>
            <textarea className="right" />

        </div>
        <div className="row" id="supervisor-row">
            <label for="role" className="left" id="role-id"> Supervisor </label>
            <input name="supervisor" className="right" type="text" required/>

        </div>

        <div className="row" id="hdate-row">
            <label for="hdate" className="left" id="hdate"> Hiring Date </label>
            <input name="hdate" className="right" type="date" required/>

        </div>
        <div className="row" id="jdate-row">
            <label for="jdate" className="left" id="jdate"> Joining Date </label>
            <input name="jdate" className="right" type="date" required/>

        </div>
        <div className="row" id="edate-row">
            <label for="edate" className="left" id="edate"> End Date </label>
            <input name="edate" className="right" type="date"/>

        </div>
        <div className="row" id="salary-row">
            <label for="age" className="left" id="salaryemp"> Salary </label>
            <input name="salary" className="right" type="number" required/>

        </div>
        <div className="row" id="address-row">
            <label for="age" className="left" id="adress"> Address </label>
            <textarea className="right" />

        </div>
    </div>

        <div className="button">
        <button className="submit-button" type="submit" name="submit">Save </button>
        </div>
    </form>




);

export default AddEmployee;
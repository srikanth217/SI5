import React from 'react';
import './Login.css';

const Login = () => (
<div className="main">
    <form className="form">
        <div className="row" id="user-row">
            <label for="email" className="left" id="email-id"> Email: </label>
            <input name="email" className="right"  type="email" required/>

        </div>

        <div className=" row" id="password-row">
            <label for=" password" className=" left" id=" password-id"> Password: </label>
            <input  name=" password" className=" right"  type=" password" required/>

        </div>
        <div className="submit" id="submit-row">
            <button className="submit-button" type="submit" name="submit">Submit </button>
        </div>





    </form>

</div>

);

export  default Login;
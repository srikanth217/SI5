import React from 'react';
import Img from './assets/images/logo1.png';
import './Header.css';

const Header = () => (
    <div className="header">
    <div className="row">
    <div className="row1">
        <img src={Img} alt="lg" className="lg"/>
    </div>
    <div className="title">
        <h1>Welcome SI5</h1>
    </div>

</div>
    </div>
);
export default Header;
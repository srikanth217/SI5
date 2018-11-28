import React from 'react';

const navigationItem = (props) => {
    const buttonClassNames = `btn btn-dark ml-1 text-capitalize ${props.active ? 'active': ''}`;
    return (
        <li className="nav-item">
            <button className={buttonClassNames}
                onClick={props.clicked}>
                {props.title}
            </button>
        </li>
    );
};

export default navigationItem;

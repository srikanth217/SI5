import React from 'react';

const button = (props) => {
    const buttonClassNames = `${props.classes ? props.classes : 'btn ml-1 text-capitalize'} ${props.active ? 'active': ''} ${props.btnColor ? props.btnColor : 'btn-dark'}`;
    return (
        <button className={buttonClassNames}
                onClick={props.clicked}>
            {props.title}
        </button>
    );
};

export default button;

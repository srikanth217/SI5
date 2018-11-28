import React from 'react';

import Button from '../../Button/Button';

const navigationItem = (props) => {
    return (
        <li className="nav-item">
            <Button
                btnColor={"btn-dark"}
                clicked={props.clicked}
                title={props.title}
                active={props.active}/>
        </li>
    );
};

export default navigationItem;

import React from 'react';

import Button from '../../Button/Button';

const employeeCard = (props) => {
    return (
        <div className="card mb-3">
            {props.cardHeader ? <div className="card-header h5 text-capitalize">id - {props.cardHeader}</div> : null}
            <div className="card-body">
                {props.cardTitle ? <h4 className="card-title text-capitalize">name - {props.cardTitle}</h4> : null}
                {props.cardText ? <p className="card-text">description - {props.cardText}</p> : null}
                {props.cardButtons ? props.cardButtons.map((button, i) => <Button
                    classes={button.classes}
                    btnColor={button.btnColor}
                    clicked={button.clicked}
                    title={button.title}
                    active={button.active}
                    key={i}/>)
                : null}
            </div>
        </div>
    );
};

export default employeeCard;

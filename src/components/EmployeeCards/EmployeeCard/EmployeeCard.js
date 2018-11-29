import React from 'react';

import Button from '../../UI/Button/Button';

const employeeCard = (props) => {
    return (
        <div className="card mb-3">
            {props.cardHeader ? <div className="card-header h5 text-capitalize">{props.cardHeader}</div> : null}
            <div className="card-body">
                <div className="row">
                    <div className="col-md-7">
                        {props.cardTitle ? <h4 className="card-title text-capitalize">{props.cardTitle}</h4> : null}
                        {props.cardText ? <p className="card-text lead">{props.cardText}</p> : null}
                        {props.cardEmail ? <p className="card-text">{props.cardEmail}</p> : null}
                    </div>
                    <div className="col-md-5 text-right">{props.cardButtons ? props.cardButtons.map((button, i) => <Button
                            classes={button.classes}
                            btnColor={button.btnColor}
                            clicked={button.clicked}
                            title={button.title}
                            active={button.active}
                            key={i}/>)
                        : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default employeeCard;

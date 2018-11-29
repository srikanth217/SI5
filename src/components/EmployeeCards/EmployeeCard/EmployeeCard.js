import React from 'react';

import Button from '../../UI/Button/Button';

const employeeCard = (props) => {
    return (
        <div className="card mb-3">
            {props.empId ? <div className="card-header h5 text-capitalize">{props.empId}</div> : null}
            <div className="card-body">
                <div className="row">
                    <div className="col-md-7">
                        {props.empName ? <h4 className="card-title text-capitalize">{props.empName}</h4> : null}
                        {props.empAge ? <p className="card-text lead">{props.empAge}</p> : null}
                        {props.empJoinDate ? <p className="card-text">{props.empJoinDate}</p> : null}
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

import React from 'react';

import Button from '../../UI/Button/Button';

const employeeCard = (props) => {
    return (
        <div className="card mb-3">
            {props.empId ? <div className="card-header h5 text-capitalize">employee id: {props.empId}</div> : null}
            <div className="card-body">
                <div className="row">
                    <div className="col-md-7">
                        {props.empName ? <h4 className="card-title text-capitalize">name: {props.empName}</h4> : null}
                        {props.empAge ? <h6 className="card-text text-capitalize">age: {props.empAge}</h6> : null}
                        {props.empJoinDate ? <h6 className="card-text text-capitalize">join date: {props.empJoinDate}</h6> : null}
                        {props.empAccountNumber ? <h6 className="card-text text-capitalize">account number: {props.empAccountNumber}</h6> : null}
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

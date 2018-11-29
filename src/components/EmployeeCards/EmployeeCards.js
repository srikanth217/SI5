import React from 'react';

import EmployeeCard from './EmployeeCard/EmployeeCard';

const employeeCards = (props) => {
    let employeeCards = [];
    if (props.employeeCards) {
        employeeCards = props.employeeCards.map((card, i) => <EmployeeCard
            empId={card.empId}
            empName={card.empName}
            empAge={card.empAge}
            empJoinDate={card.empJoinDate}
            cardButtons={card.cardButtons}
            key={i}/>);
    }
    return (
        <div className="container mb-3">
            {employeeCards}
        </div>
    );
};

export default employeeCards;

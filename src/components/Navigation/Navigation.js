import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => {
    let navigationList = [];
    if (props.navigationItems) {
        navigationList = props.navigationItems
            .map((item, i) => <NavigationItem
                clicked={item.clicked}
                title={item.title}
                active={item.active}
                key={i} />);
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container">
                <a className="navbar-brand" href={"/"}>Dashboard</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {navigationList}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navigation;

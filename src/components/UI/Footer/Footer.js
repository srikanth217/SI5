import React from 'react';

const footer = (props) => {
    return (
        <footer className="bg-dark text-white text-white text-center py-4 mt-5 text-capitalize">
            Copyright &copy; {new Date().getFullYear()} {props.title ? props.title : null}
        </footer>
    );
};

export default footer;

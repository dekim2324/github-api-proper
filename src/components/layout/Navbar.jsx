import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className="fab fa-github"></i> {title}
            </h1>
        </div>
    )
};

Navbar.defaultProps = {
    title: 'Github Finder'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar;
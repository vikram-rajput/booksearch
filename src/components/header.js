import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" to="/">BookSearch</a>
        </nav>
        </div>
    );
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">BookSearch</Link>
        <Link className="navbar-brand" to="/">Home</Link>
        </nav>
        </div>
    );
}

export default Header;
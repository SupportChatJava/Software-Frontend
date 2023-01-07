import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-light bg-warning">
            <span className="navbar-brand mb-0 h1">User Panel</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/Register">Register</NavLink>
        </nav>
    );
}

export default Navigation;


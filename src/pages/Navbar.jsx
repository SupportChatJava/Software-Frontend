import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
           <NavLink to="/Login">Login</NavLink>
           <NavLink to="/Register">Register</NavLink>
           <NavLink to="/Users">Users</NavLink>
       </div>
    );
}
 
export default Navigation;


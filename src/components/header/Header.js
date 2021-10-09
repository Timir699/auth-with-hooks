import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to="/Home">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <button>Log Out</button>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css'
const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div className="header">
            <Link to="/Home">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Shipping">Shipping</Link>
            <Link to="/PlaceOrder">Place Order</Link>
            <span>{user.displayName}</span>
            {user?.email && <button onClick={logout}>Log Out</button>}
        </div>
    );
};

export default Header;
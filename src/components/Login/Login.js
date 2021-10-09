import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth()
    return (
        <div>
            <h2>login</h2>
            <button onClick={signInWithGoogle}>sign in with google</button>
            <br />
            <Link to="/Register">new user?</Link>
        </div>
    );
};

export default Login;
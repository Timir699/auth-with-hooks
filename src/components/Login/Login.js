import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, user } = useFirebase()
    return (
        <div>
            <h2>login</h2>
            <button onClick={() => {
                user?.email && signInWithGoogle()
            }}>sign in with google</button>
            <br />
            <Link to="/Register">new user?</Link>
        </div>
    );
};

export default Login;
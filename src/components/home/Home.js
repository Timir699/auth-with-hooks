import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>Home</h2>
            <h2>User : {user.displayName}</h2>
        </div>
    );
};

export default Home;
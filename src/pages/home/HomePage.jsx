import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {
    
    const location = useLocation();

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Access to your tasks</h2>
            <button onClick = { () => { navigateTo('/profile') } }>
                Go to profile
            </button>
        </div>
    );
}

export default HomePage;

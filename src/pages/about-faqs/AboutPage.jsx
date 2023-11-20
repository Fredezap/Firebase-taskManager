import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AboutPage = () => {
    
    const location = useLocation();

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>
                About page
            </h1>
            <button onClick = { () => { navigateTo('/') } }>
                Go to home
            </button>
            <button onClick = { goBack }>
                Go back
            </button>
        </div>
    );
}

export default AboutPage;

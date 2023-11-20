import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

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
            <h1>404 -- Page not found</h1>
            <button onClick = { () => navigateTo('/') }>
                Go to home
            </button>
            <button onClick = { goBack }>
                Go back
            </button>
        </div>
    );
}

export default NotFoundPage;

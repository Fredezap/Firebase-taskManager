import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const FAQsPage = () => {

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
                FAQs Page
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

export default FAQsPage;

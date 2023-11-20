import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const ProfilePage = ({user}) => {

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
            <h1>Your profile</h1>
            <button onClick = { () => navigateTo('/tasks') }>
                Tasks
            </button>
            <button onClick = { goBack }>
                Go back
            </button>
        </div>
    );
}

export default ProfilePage;

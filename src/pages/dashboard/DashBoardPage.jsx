import Button from '@mui/material/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import MenuListItems from '../../components/pure/MenuListItems';


const DashBoardPage = ({LoggedIn, logInOut}) => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    const list = [
        {
            text: 'HOME',
            path: '/',
        },
        {
            text: 'TASKS',
            path: '/tasks',
        }
    ]

    return (
        <div>
        <div id='Dashboard'>
            <MenuListItems list={ list }></MenuListItems>
            {LoggedIn ? 
                <Button id='log-in-button' variant="contained" onClick={logInOut}>Logout</Button>
                :
                <Button id='log-in-button' variant="contained" onClick={login}>Login</Button>
            }
        </div>
        </div>
    );
}

export default DashBoardPage;

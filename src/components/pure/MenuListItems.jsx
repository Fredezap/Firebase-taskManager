import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Settings } from '@mui/icons-material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return <HomeRoundedIcon/>
        case 'TASKS':
            return <FormatListNumberedRoundedIcon/>
        case 'SETTINGS':
            return <Settings/>
        default:
            return <HomeRoundedIcon/>
    }
}

const MenuListItems = ({list}) => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <List>
            {list.map(({text, path}, index) => 
                (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => navigateTo(path)}>
                            <ListItemIcon>
                                {getIcon(text)}
                            </ListItemIcon>
                            <ListItemText 
                                primary={text} />
                        </ListItemButton>
                    </ListItem>
                )
            )}
        </List>
    );
}

export default MenuListItems;

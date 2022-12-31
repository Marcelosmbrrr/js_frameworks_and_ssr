import * as React from 'react';
// Styled component
import { Header as HeaderStyled } from '../styled/header';
// Context auth
import { useAuth } from '../context/auth';
// Material ui
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {

    const { logout } = useAuth();

    function handleLogout() {
        logout();
    }

    return (
        <HeaderStyled>
            <div>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton onClick={handleLogout}>
                    <DoorBackIcon />
                </IconButton>
            </div>
        </HeaderStyled>
    );
}
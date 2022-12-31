import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Assets
import NextLogo from "../public/images/next.svg";
// Styled component
import { Navbar as NavbarStyled, NavbarList, NavbarHeader, NavbarNeck, NavbarBody, NavbarItem, NavbarItemIcon, NavbarItemText } from '../styled/navbar';
// Material ui
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const pages = [
    { id: 1, icon: <DashboardIcon fontSize="medium" />, text: "Dashboard", link: '/dashboard' },
    { id: 2, icon: <GroupIcon fontSize="medium" />, text: "Users", link: '/users' },
    { id: 3, icon: <ContactEmergencyIcon fontSize="medium" />, text: "My Profile", link: '/myprofile' }
]

export default function Navbar() {
    return (
        <NavbarStyled>

            <NavbarHeader>
                <Image src={NextLogo} alt="next logo picture" width={90} priority />
            </NavbarHeader>

            <NavbarNeck>
                <Avatar>H</Avatar>
            </NavbarNeck>

            <NavbarBody>
                <NavbarList>
                    {pages.map((page, index) =>
                        <Link href={page.link} key={page.id}>
                            <NavbarItem key={index}>
                                <NavbarItemIcon>
                                    {page.icon}
                                </NavbarItemIcon>
                                <NavbarItemText>
                                    {page.text}
                                </NavbarItemText>
                            </NavbarItem>
                        </Link>
                    )}
                </NavbarList>
            </NavbarBody>
        </NavbarStyled>
    )
}
import styled from 'styled-components';

export const Navbar = styled.nav`
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
    display: grid;
    grid-template-rows: 70px 75px 1fr;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const NavbarHeader = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const NavbarNeck = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const NavbarBody = styled.div`
   display: grid;
   grid-template-columns: 'auto' 1fr;
   grid-template-rows: none;
`;

export const NavbarList = styled.ul`
   padding: 0;
   margin: 0;
   width: 100%;
`;

export const NavbarItem = styled.li`
  width: 100%;
  padding: 15px;
  font-weight: 800;
  font-size: 15px;
  display: flex;
  align-items: center;
  &:hover {
   background-color: #F6F6F6;
  }
`;

export const NavbarItemIcon = styled.div`
padding-right: 10px;
`;

export const NavbarItemText = styled.div`
font-size: 15px;
  font-weight: 900;
  display: flex;
  align-items: center;
`;
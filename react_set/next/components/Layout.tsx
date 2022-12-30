import * as React from 'react';
// Styled component
import { Layout as LayoutStyled } from '../styled/layout';
// Components
import Header from './Header';
import Navbar from './Navbar';
import PageContainer from './PageContainer';

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <LayoutStyled>
            <Header />
            <PageContainer>
                {children}
            </PageContainer>
            <Navbar />
        </LayoutStyled>
    )
}
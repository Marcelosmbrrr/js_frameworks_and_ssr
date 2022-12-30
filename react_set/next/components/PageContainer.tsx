import * as React from 'react';
// Styled component
import { PageContainer as PageContainerStyled } from '../styled/page_container';

export default function PageContainer({ children }: { children: JSX.Element }) {
    return (
        <PageContainerStyled>
            { children }
        </PageContainerStyled>
    )
}
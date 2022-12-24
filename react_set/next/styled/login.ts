// Styled components
import styled from 'styled-components';
import { keyframes } from 'styled-components';
// Image asset
import image from '../public/images/background.png';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${image.src});
    background-size: cover;
`;

export const keyframeFadeOut = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const FormularyBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
    background-color: #fff;
    width: 450px;
    padding: 0px 20px;
    animation: ${keyframeFadeOut} 1s ease-in-out;
`;
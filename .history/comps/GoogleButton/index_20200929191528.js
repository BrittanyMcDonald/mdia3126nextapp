import React from 'react';
import styled from 'styled-components';


const GoogleButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 100%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;


    text-align: center;
    letter-spacing: 0.03em;

    color: #FFFFFF;
`;

const googleImg = require('../../public/G.png');

const IconStyle = styled.div`
    position: absolute;
    background: #FFF;
    padding: 12px;
    left: 0px;
`;

const GoogleButton = ({img})=>{
    return <div>
        <GoogleButtonStyle>
            <IconStyle><img src={img} /></IconStyle>
            Login with Google
        </GoogleButtonStyle>
    </div>
}

GoogleButton.defaultProps = {
    img:googleImg
}

export default GoogleButton;
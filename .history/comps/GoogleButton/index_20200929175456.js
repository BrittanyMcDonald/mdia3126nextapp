import React from 'react';
import styled from 'styled-components';


const GoogleButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #FFF;
    max-width: 50%;
    padding: 10px;
`;

const googleImg = require('../../assets/G.png');

const IconStyle = styled.div`
    position: absolute;
    background: #FFF;
    padding: 10px;
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
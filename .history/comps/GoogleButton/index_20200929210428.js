import React from 'react';
import styled from 'styled-components';


const GoogleButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 100%;
    height: 51px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;


    text-align: center;
    letter-spacing: 0.03em;

    color: #FFFFFF;
`;


const IconStyle = styled.div`
    position: absolute;
    background: #FFF;
    padding: 12px;
    left: 20px;
`;

const GoogleButton = ({img})=>{
    return <div>
        <GoogleButtonStyle>
            <img src="/image5.png" />
            Login with Google
        </GoogleButtonStyle>
    </div>
}

GoogleButton.defaultProps = {

}

export default GoogleButton;
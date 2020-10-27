import React from 'react';
import styled from 'styled-components';


const GoogleButtonStyle = styled.div`
position:relative;
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
    left: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const GoogleButton = ({img})=>{
    return <div>
        <GoogleButtonStyle>
            <IconStyle>
                <img src="/G.png" />
            </IconStyle>
            
            Login with Google
        </GoogleButtonStyle>
    </div>
}

GoogleButton.defaultProps = {

}

export default GoogleButton;
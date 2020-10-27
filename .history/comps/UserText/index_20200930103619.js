import React from 'react';
import styled from 'styled-components';



 const WelcomeContainer = styled.div`
    display:flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.1em;
    padding: 10px 30px 10px 20px;
    color: #3D5AF1;
`;

const WelcomeTextStyle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 45px;
    color: #000000;
`;

const UserTextStyle = styled.div`

`;

const Logo = ()=>{
    return <div>
                <LogoContainer>
                    <IconStyle><img src="/layer 2.png" /></IconStyle>                    
                    Logo
                </LogoContainer>
        
    </div>
}

Logo.defaultProps = {

}

export default Logo;
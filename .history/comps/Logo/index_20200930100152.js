import React from 'react';
import styled from 'styled-components';


const ImageContainer = styled.div`
    display:flex;    
`;

const BannerStyle = styled.div`
    position: absolute;
    left: 700px;
 `;

 const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.1em;
    padding: 10px;
    color: #3D5AF1;
`;

const IconStyle = styled.div`
    padding: 10px;
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
import React from 'react';
import styled from 'styled-components';



 const HighlightContainer = styled.div`
    display: flex;
    align-items: center;
    width: 147px;
    height: 43px;
`;

const WelcomeTextStyle = styled.div`

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
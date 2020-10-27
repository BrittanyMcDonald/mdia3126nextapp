import React from 'react';
import styled from 'styled-components';



 const HighlightContainer = styled.div`
    display: flex;
    align-items: center;
    width: 147px;
    height: 43px;
`;

const TextStyle = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
text-align: center;
`;

const Logo = ()=>{
    return <div>
                <HighlightContainer>
                    <IconStyle>Highlighted Text</IconStyle>                    
                </HighlightContainer>
        
    </div>
}

Logo.defaultProps = {

}

export default Logo;
import React from 'react';
import styled from 'styled-components';


 const ItemContainer = styled.div`
    display:flex;
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
    display: flex;
`;

const MenuItem = ()=>{
    return <div>
                <ItemContainer>
                    <IconStyle><img src="/layer 2.png" /></IconStyle>                    
                    Logo
                </ItemContainer>
        
    </div>
}

MenuItem.defaultProps = {

}

export default MenuItem;
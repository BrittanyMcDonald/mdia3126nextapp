import React from 'react';
import styled from 'styled-components';


 const ItemContainer = styled.div`
    display:flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    
    
    
    color: #3D6FF1;
`;

const IconStyle = styled.div`
    padding: 20px;
    display: flex;
`;

const MenuItem = ()=>{
    return <div>
                <ItemContainer>
                    <IconStyle><img src="/Home.png" /></IconStyle>                    
                    Menu 1
                </ItemContainer>
        
    </div>
}

MenuItem.defaultProps = {

}

export default MenuItem;
import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.div`
    position: absolute;
    width: 1451px;
    height: 78px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: space-between;
    background: rgba(255, 255, 255, 0.88);    
`;

const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-text: center;
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

const ActiveContainer = styled.div`

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #3D6FF1;
 `;

// const FreeAccountStyle = styled.div`
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 18px;
//     line-height: 21px;
//     color: #3D5AF1;


// `;

const NavBar = ()=>{
    return <div>
        <NavContainer>
            <div>
                <LogoContainer>
                    <IconStyle><img src="/layer 2.png" /></IconStyle>
                    
                    Logo</LogoContainer>
            </div>
            
        </NavContainer>
    </div>
}

NavBar.defaultProps = {

}

export default NavBar;
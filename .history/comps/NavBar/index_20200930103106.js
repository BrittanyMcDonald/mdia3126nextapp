import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import MenuItem from '../MenuItem';
import Avatar from '../Avatar';


const NavContainer = styled.div`
    position: absolute;
    width: 1451px;
    height: 78px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #F2F4FB;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);  
`;



const LeftNavSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
 `;


 const RightNavSection = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`;

const IconStyle = styled.div`
    padding: 0px 15px 0px 15px;  
`;


const NavBar = ()=>{
    return <div>
        <NavContainer>
            <LeftNavSection>
                <div>
                    <Logo />
                </div>
                <MenuItem />
                <MenuItem />            
            </LeftNavSection>

            <RightNavSection>
                <IconStyle><img src="/search_24px.png" /></IconStyle>
                <IconStyle><img src="/group 1675.png" /></IconStyle>
                
                <Avatar />
            </RightNavSection>
            
        </NavContainer>
    </div>
}

NavBar.defaultProps = {

}

export default NavBar;
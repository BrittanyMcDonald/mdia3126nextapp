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
    background: #F2F4FB;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);  
`;



const LeftNavSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
 `;


 const RightNavSection = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
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
                <img src="/search_24px.png" />
                <img src="/group 1675.png" />
            </RightNavSection>

            <div>
                <Avatar />
            </div>
            
        </NavContainer>
    </div>
}

NavBar.defaultProps = {

}

export default NavBar;
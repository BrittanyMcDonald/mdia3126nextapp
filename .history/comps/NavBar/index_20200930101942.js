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
    align-items: space-between;
    background: #F2F4FB;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);  
`;



const LeftNavSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
            <LeftNavSection></LeftNavSection>
                <div>
                    <Logo />
                </div>
                <div>
                    <MenuItem />
                    <MenuItem />
                </div>

            <div>
                <img src="/search_24px.png" />
                <img src="/group 1675.png" />
            </div>

            <div>
                <Avatar />
            </div>
            
        </NavContainer>
    </div>
}

NavBar.defaultProps = {

}

export default NavBar;
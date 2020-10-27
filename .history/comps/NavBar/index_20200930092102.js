import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.div`
    position: absolute;
    width: 1451px;
    height: 78px;    
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background: rgba(255, 255, 255, 0.88);    
`;

const ActiveContainer = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.1em;

    color: #3D5AF1;
`;

const BannerStyle = styled.div`


    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
   
    color: #333333;
    margin-bottom: 25px;
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

            </div>
            <ActiveContainer>
                <BannerStyle>Hack your way to learning</BannerStyle>
                <FreeAccountStyle>Start your free account today.</FreeAccountStyle>
                </ActiveContainer>
        </NavContainer>
    </div>
}

NavBar.defaultProps = {

}

export default NavBar;
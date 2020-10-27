import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
    width: 50%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background: #999999;
`;

const BannerStyle = styled.div`


    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
   
    color: #333333;
    margin: 30px 20px 10px 30px;
 `;

const FreeAccountStyle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #3D5AF1;
    margin-left: 30px;

`;

const Banner = ()=>{
    return <div>
        <BannerContainer>
            <BannerStyle>Label</BannerStyle>
            <FreeAccountStyle>joe@gmail.com</FreeAccountStyle>
        </BannerContainer>
    </div>
}

Banner.defaultProps = {

}

export default Banner;
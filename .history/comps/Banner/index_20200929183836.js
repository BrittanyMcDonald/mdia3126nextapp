import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.88);
`;

const BannerStyle = styled.div`
    width: 50%;
    height: 10%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
  
    color: #333333;
`;

const FreeAccountStyle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #3D5AF1;
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
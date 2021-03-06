import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
    position: absolute;
    width: 478px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background: rgba(255, 255, 255, 0.88);    
    left: 120px;
    top: 700px;
`;

const TextContainer = styled.div`
    padding: 40px;
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
            <TextContainer>
                <BannerStyle>Hack your way to learning</BannerStyle>
                <FreeAccountStyle>Start your free account today.</FreeAccountStyle>
                </TextContainer>
        </BannerContainer>
    </div>
}

Banner.defaultProps = {

}

export default Banner;
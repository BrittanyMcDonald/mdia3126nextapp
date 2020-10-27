import React from 'react';
import styled from 'styled-components';


const ImageContainer = styled.div`
    display:flex;    
`;

const BannerStyle = styled.div`


    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
   
    color: #333333;
    margin-bottom: 20px;
 `;

const Image = ()=>{
    return <div>
        <ImageContainer>
                <img src="/image5.png" />
                <Banner></Banner>
        </ImageContainer>
    </div>
}

Image.defaultProps = {

}

export default Image;
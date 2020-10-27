import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';


const ImageContainer = styled.div`
    display:flex;
    position: relative;    
`;

const BannerStyle = styled.div`
    position: absolute;
    left: 700px;
 `;

const Image = ()=>{
    return <div>
        <ImageContainer>
                <img src="/image5.png" />
                <BannerStyle>
                    <Banner></Banner>
                </BannerStyle>
        </ImageContainer>
    </div>
}

Image.defaultProps = {

}

export default Image;
import React from 'react';
import styled from 'styled-components';


const ImageContainer = styled.div`
    display:flex;  
    padding: 0px 30px 0px 30px;   
`;

const Avatar = ()=>{
    return <div>
        <ImageContainer>
                <img src="/Avatar.png" />
        </ImageContainer>
    </div>
}

Avatar.defaultProps = {

}

export default Avatar;
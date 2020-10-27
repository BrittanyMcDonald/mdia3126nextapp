import React, {useState} from 'react';
import styled from 'styled-components';



 const HighlightContainer = styled.div`
    display: flex;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
    width: 147px;
    height: 43px;
    &:hover {
        background-color: #FF0000;
    }
`;

const TextStyle = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
text-align: center;
`;

const HighlightedText = ({highlight})=>{
    return <div>
                <HighlightContainer>
                    <TextStyle>Highlighted Text</TextStyle>                    
                </HighlightContainer>
        
    </div>
}

HighlightedText.defaultProps = {
    highlight: "#FFFFFF"
}

export default HighlightedText;
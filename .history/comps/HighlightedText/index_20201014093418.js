import React from 'react';
import styled from 'styled-components';



 const HighlightContainer = styled.div`
    display: flex;
    background-color: ${props=>props.highlight ? props.highlight : "#FF0000"};
    justify-content: center;
    align-items: center;
    width: 147px;
    height: 43px;
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
                    <TextStyle backgroundColor={highlight}>Highlighted Text</TextStyle>                    
                </HighlightContainer>
        
    </div>
}

HighlightedText.defaultProps = {
    highlight: "#FFFFFF"
}

export default HighlightedText;
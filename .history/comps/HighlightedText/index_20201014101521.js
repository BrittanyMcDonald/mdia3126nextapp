import React, {useState} from 'react';
import styled from 'styled-components';



 const HighlightContainer = styled.div`
    display: flex;
    background-color:${props=>props.highlight ? "#FFF" : "#FF0000"};
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

const HighlightedText = ()=>{
    const [highlight, setHighlight] = useState(false);

    return <div>
                <HighlightContainer highlight={highlight} onClick={() =>{
                    setHighlight(true);
                }}>
                    <TextStyle>Highlighted Text</TextStyle>                    
                </HighlightContainer>
        
    </div>
}

HighlightedText.defaultProps = {
    
}

export default HighlightedText;
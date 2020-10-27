import React, {useState} from 'react';
import styled from 'styled-components';



 const LabelDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 147px;
    height: 43px;

`;

const FormStyle = styled.div`
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 5px;
`;

const Label = ()=>{
    const [highlight, setHighlight] = useState(false);

    return <LabelDiv>
                <FormStyle>Input Text</FormStyle>
        
    </LabelDiv>
}

Label.defaultProps = {
    
}

export default Label;
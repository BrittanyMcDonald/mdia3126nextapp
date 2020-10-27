import React, {useState} from 'react';
import styled from 'styled-components';



 const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 8px;
`;

const TextStyle = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
`;

const CheckSquare = styled.div`
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 3px; 
`;

const CheckboxField = ()=>{
    const [highlight, setHighlight] = useState(false);

    return <div>
                <CheckboxContainer highlight={highlight} onClick={() =>{
                    setHighlight();
                }}>
                    <CheckSquare><img src="./check.png" /></CheckSquare>
                    <TextStyle>Checkbox Text</TextStyle>                    
                </CheckboxContainer>
        
    </div>  
}

CheckboxField.defaultProps = {
    
}

export default CheckboxField;
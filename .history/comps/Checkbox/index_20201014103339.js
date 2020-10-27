import React, {useState} from 'react';
import styled from 'styled-components';



 const CheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 541px;
    height: 50px;
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
    padding: 10px;
`;

const CheckSquare = styled.div`
    background: #FFFFFF;
    height: 18px;
    width: 18px;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 3px; 
    margin: 10px;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CheckboxField = ()=>{
    const [highlight, setHighlight] = useState(false);

    return <div>
                <CheckboxContainer highlight={highlight} onClick={() =>{
                    setHighlight();
                }}>
                    <ContentContainer>
                        <CheckSquare><img src="./check.png" /></CheckSquare>
                        <TextStyle>Checkbox Text</TextStyle>   
                    </ContentContainer>
                </CheckboxContainer>
        
    </div>  
}

CheckboxField.defaultProps = {
    
}

export default CheckboxField;
import React, {useState} from 'react';
import styled from 'styled-components';



 const CheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 541px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid;
    border-color:${props=>props.checked ? "#444444" : "#3670EE"};
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
    margin-left: 20px;
`;

const CheckSquare = styled.div`
    background:${props=>props.checked ? "#FFFFFF" : "#8893B8"};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 18px;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 3px; 
    margin-left: 15px;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CheckboxField = ()=>{
    const [checked, setChecked] = useState(true);

    return <div>
                <CheckboxContainer>
                    <ContentContainer>
                        <CheckSquare checked={checked} onClick={() =>{
                    setChecked(!checked);
                }}><img src="./check.png" /></CheckSquare>
                        <TextStyle>Checkbox Text</TextStyle>   
                    </ContentContainer>
                </CheckboxContainer>
        
    </div>  
}

CheckboxField.defaultProps = {
    
}

export default CheckboxField;
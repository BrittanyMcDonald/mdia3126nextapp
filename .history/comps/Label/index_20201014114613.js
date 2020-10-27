import React, {useState} from 'react';
import styled from 'styled-components';



 const LabelDiv = styled.div`
    display: flex;
    align-items: center;
`;

const LabelTitle = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
`;

const FormStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 5px;
    width: 360px;
    height: 45px;
    margin-left: 30px;
`;

const InputText = styled.div`
    display:${props=>props.focused ? "flex" : "none"};
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #828282;
    margin-left: 20px;
`;

const Label = ()=>{
    const[focused, setFocused] = useState(true);

    return <LabelDiv>
                <LabelTitle>Label</LabelTitle>
                <FormStyle>
                    <InputText focused={focused} onFocus={() =>{
                    setFocused(!focused);
                }}>Input Text</InputText>
                </FormStyle>
        
    </LabelDiv>
}

Label.defaultProps = {
    
}

export default Label;
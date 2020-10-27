import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const InputStyle = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 10px 10px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: lowercase;

    color: #000000;
    background-color: #efefef;
    border-radius: 5px;
`;

const LabelStyle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #686868;
`;

const Input = ()=>{
    return <div>
        <InputContainer>
            <LabelStyle>Label</LabelStyle>
            <InputStyle>joe@gmail.com</InputStyle>
        </InputContainer>
    </div>
}

Input.defaultProps = {

}

export default Input;
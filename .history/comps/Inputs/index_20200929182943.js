import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const InputStyle = styled.div`
    width: 100%;
    height: auto;
    background-color: #777777;
    padding: 10px;
`;

const LabelStyle = styled.div`
    font-size: 1em;
    color: #555555;
    padding: 5px;
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
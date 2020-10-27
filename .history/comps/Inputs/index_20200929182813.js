import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InputStyle = styled.div`
    width: 100%;
    height: auto;
    background-color: #777777;
`;

const LabelStyle = styled.div`
    font-size: 1em;
    color: #555555;
    padding: 5px;
`;

const Input = ()=>{
    return <div>
        <InputContainer>
            <InputStyle></InputStyle>
            <LabelStyle>or</LabelStyle>
            <InputStyle></InputStyle>
        </InputContainer>
    </div>
}

Input.defaultProps = {

}

export default Input;
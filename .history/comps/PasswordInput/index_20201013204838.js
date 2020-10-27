import React from 'react';
import styled from 'styled-components';


const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const TextStyle = styled.div`
    max-width: 100%;
    height: auto;
    padding: 10px 10px 10px 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: lowercase;

    color: #000000;
    background-color: #efefef;
    border-radius: 5px;
`;

const PasswordStyle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #686868;
`;

const Password = ()=>{
    return <div>
        <PasswordContainer>
            <PasswordStyle>Password</PasswordStyle>
            <TextStyle>•••••••••••••••••</TextStyle>
        </PasswordContainer>
    </div>
}

Password.defaultProps = {

}

export default Password;
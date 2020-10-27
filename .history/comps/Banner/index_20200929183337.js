import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const BannerStyle = styled.div`
    width: 50%;
    height: 10%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;

    color: #000000;
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
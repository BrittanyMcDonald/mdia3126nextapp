import React from 'react';
import styled from 'styled-components';


const BasicButtonStyle = styled.div`
    background-color:${props=>props.backgroundColor ? props.backgroundColor : "#4285F4"};
    display: flex;
    justify-content:center;
    align-items: center;
    max-width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff; 

    text-align: center;
    letter-spacing: 0.03em;
`;


const BasicButton = (backgroundColor)=>{
    return <div>
        <BasicButtonStyle>
            Login
        </BasicButtonStyle>
    </div>
}

BasicButton.defaultProps = {
    backgroundColor="#D79B9B"
}

export default BasicButton;
import React from 'react';
import styled from 'styled-components';
import GoogleButton from '../GoogleButton';
import Divider from '../Divider';
import Input from '../Inputs';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    width: 390px;
    height: 515px;
    display:flex;
    flex-direction: column;
    align-content: space-between;
`;


const WelcomeText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    color: #000000;
`;

const PWStyle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #4285F4;
    left: 100px;
`;


const WelcomeForm = () => {

    return <div id="welcome">
        <LoginComponent>
            <WelcomeText>Welcome Back!</WelcomeText>
            <GoogleButton></GoogleButton>
            <Divider></Divider>
            <Input></Input>
            <PWStyle>
                Forgot Password?
            </PWStyle>
            <BasicButton></BasicButton>
        </LoginComponent>


    </div>
}


WelcomeForm.defaultProps = {

}

export default WelcomeForm;
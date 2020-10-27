import React from 'react';
import styled from 'styled-components';
import GoogleButton from '../GoogleButton';
import Divider from '../Divider';
import Input from '../Inputs';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    min-width: 390px;
    min-height: 515px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
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
    text-align: right;
`;


const WelcomeForm = () => {

    return <div>
        <LoginComponent>
            <WelcomeText>Welcome Back!</WelcomeText>
            <GoogleButton></GoogleButton>
            <Divider></Divider>
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
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
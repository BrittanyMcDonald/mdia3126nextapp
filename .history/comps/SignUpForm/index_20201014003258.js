import React, {useState} from 'react';
import styled from 'styled-components';
import PasswordInput from '../PasswordInput';
import EmailInput from '../EmailInput';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    min-width: 390px;
    min-height: 480px;
    display:${props=>props.open ? props.open : "flex"};
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



const SignUpForm = ({text, open}) => {

    return <div>
        <LoginComponent display={open}>
            <WelcomeText>Signup For an account</WelcomeText>
            <div>
                <EmailInput></EmailInput>
                <PasswordInput></PasswordInput>
                <PasswordInput passwordText={text}></PasswordInput>
            </div>
            <BasicButton></BasicButton>
            
        </LoginComponent>


    </div>
}


SignUpForm.defaultProps = {
    text: "Confirm Password",
    open: "flex" // What am I doing wrong? lol    (flex in props above was originally "none".... changed it so that I could see it in storyboard)
}

export default SignUpForm;
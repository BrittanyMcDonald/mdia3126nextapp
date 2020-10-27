import React, {useState} from 'react';
import styled from 'styled-components';
import PasswordInput from '../PasswordInput';
import EmailInput from '../EmailInput';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    min-width: 390px;
    min-height: 480px;
    display:${props=>props.open ? props.open : "none"};
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

    const [expandSignUp, setExpandSignUp] = useState(false);

    return <div>
        <LoginComponent>
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
    open: "flex"
}

export default SignUpForm;
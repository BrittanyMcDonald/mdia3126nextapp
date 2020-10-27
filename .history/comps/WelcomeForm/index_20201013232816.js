import React, {useState} from 'react';
import styled from 'styled-components';
import GoogleButton from '../GoogleButton';
import Divider from '../Divider';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    min-width: 390px;
    min-height: 515px;
    display:${props=>props.close ? props.close : "none"};
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


const WelcomeForm = ({signUpColor, signUpText}) => {

    const [expandSignUp, setExpandSignUp] = useState(true);

    return <div>
        <LoginComponent>
            <WelcomeText>Welcome Back!</WelcomeText>
            <GoogleButton></GoogleButton>
            <Divider></Divider>
            <div>
                <EmailInput></EmailInput>
                <PasswordInput></PasswordInput>
                <PWStyle>
                    Forgot Password?
                </PWStyle>
            </div>

            <div>
                <BasicButton onClick={()=>{
                    setExpandSignUp(true);
                }}/>
                <BasicButton backgroundColor={signUpColor} text={signUpText}></BasicButton>
            </div>
        </LoginComponent>


    </div>
}


WelcomeForm.defaultProps = {
    signUpColor:"#D79B9B",
    signUpText: "Sign Up",
    close: "none"
}

export default WelcomeForm;
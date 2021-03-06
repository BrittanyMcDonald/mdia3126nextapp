import React, {useState} from 'react';
import styled from 'styled-components';
import PasswordInput from '../PasswordInput';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    min-width: 390px;
    min-height: 480px;
    display:${props=>props.hidden ? props.hidden : "flex"};
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



const SignUpForm = ({}) => {

    const [expandSignUp, setExpandSignUp] = useState(false);

    return <div>
        <LoginComponent>
            <WelcomeText>Signup For an account</WelcomeText>
            <PasswordInput></PasswordInput>
            <BasicButton></BasicButton>
        </LoginComponent>


    </div>
}


SignUpForm.defaultProps = {

}

export default SignUpForm;
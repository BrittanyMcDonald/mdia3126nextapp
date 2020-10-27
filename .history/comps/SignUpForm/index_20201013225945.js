import React from 'react';
import styled from 'styled-components';
import Input from '../Inputs';
import BasicButton from '../BasicButton';


const LoginComponent = styled.div`
    min-width: 390px;
    min-height: 480px;
    display:${props=>props.hidden ? props.hidden : "none"};
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



const SignUpForm = ({hidden}) => {

    return <div>
        <LoginComponent display={hidden}>
            <WelcomeText>Signup For an account</WelcomeText>
            <Input></Input>
            <BasicButton></BasicButton>
        </LoginComponent>


    </div>
}


SignUpForm.defaultProps = {
    hidden:null
}

export default SignUpForm;
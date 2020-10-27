import React from 'react';
import styled from 'styled-components';
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



const SignUpForm = () => {

    return <div>
        <LoginComponent>
            <WelcomeText>Signup For an account</WelcomeText>
            <Divider></Divider>
            <Input></Input>
            <BasicButton></BasicButton>
        </LoginComponent>


    </div>
}


SignUpForm.defaultProps = {

}

export default SignUpForm;
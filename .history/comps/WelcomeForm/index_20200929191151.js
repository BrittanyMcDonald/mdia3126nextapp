import React from 'react';
import styled from 'styled-components';
import GoogleButton from '../GoogleButton';
import Divider from '../Divider';


const LoginComponent = styled.div`
    width: 390px;
    height: 515px;
    display:flex;
    flex-direction: column;

`;


const WelcomeText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    color: #000000;
`;


const WelcomeForm = () => {

    return <div id="welcome">
        <LoginComponent>
            <GoogleButton></GoogleButton>
            <Divider></Divider>
        </LoginComponent>


    </div>
}


WelcomeForm.defaultProps = {

}

export default WelcomeForm;
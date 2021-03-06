import React from 'react';
import styled from 'styled-components';
import GoogleButton from '../comps/GoogleButton';


const LoginComponent = styled.div`
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


const HomePage = () => {

    return <div id="welcome">
        <LoginComponent>
            <GoogleButton></GoogleButton>
        </LoginComponent>


    </div>
}


Image.defaultProps = {

}

export default Image;